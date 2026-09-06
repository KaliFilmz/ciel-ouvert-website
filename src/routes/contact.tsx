import { createFileRoute } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/react-start";
import { Resend } from "resend";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

type ContactFormData = {
  name: string;
  email: string;
  association: string;
  message: string;
};

const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input as ContactFormData)
  .handler(async ({ data }) => {
    const payload = data;
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Ciel Ouvert <onboarding@resend.dev>",
      to: ["info@ciel-ouvert.ch"],
      replyTo: payload.email,
      subject: `Message de ${payload.name}${payload.association ? ` (${payload.association})` : ""}`,
      html: `
        <p><strong>Nom :</strong> ${payload.name}</p>
        <p><strong>Email :</strong> ${payload.email}</p>
        ${payload.association ? `<p><strong>Association :</strong> ${payload.association}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${payload.message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return { success: true };
  });

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ciel ouvert" },
      { name: "description", content: "Contactez l'équipe de Ciel ouvert et l'association Lumera à Genève." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", association: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");
    try {
      await sendContactEmail({ data: form });
      setStatus("sent");
      setForm({ name: "", email: "", association: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "rounded-md border border-input bg-card px-4 py-3 text-base focus:border-bleu-vif focus:outline-none focus:ring-2 focus:ring-bleu-vif/30";

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto grid max-w-6xl gap-16 px-6 pt-24 pb-24 md:grid-cols-[3fr_2fr]">
          <div>
            <span className="eyebrow text-bleu-vif">Contact</span>
            <h1 className="mt-6 font-serif text-5xl font-semibold leading-tight text-primary md:text-6xl">
              Parlons de votre association.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/85">
              Une question, un partenariat, une candidature pour la saison 02 ? Écrivez-nous —
              nous lisons et répondons à chaque message.
            </p>

            {status === "sent" ? (
              <div className="mt-12 rounded-2xl bg-ciel-pale p-8">
                <p className="font-serif text-2xl text-primary">Message envoyé ✓</p>
                <p className="mt-2 text-muted-foreground">
                  Merci ! Nous vous répondrons à <strong>{form.email || "votre adresse"}</strong> dans les plus brefs délais.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-medium text-bleu-vif hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-12 grid gap-5">
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Nom *</span>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    placeholder="Votre nom complet"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Email *</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="vous@exemple.ch"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Association</span>
                  <input
                    type="text"
                    value={form.association}
                    onChange={(e) => setForm({ ...form, association: e.target.value })}
                    className={inputClass}
                    placeholder="Nom de votre association (facultatif)"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="eyebrow text-muted-foreground">Message *</span>
                  <textarea
                    rows={6}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass}
                    placeholder="Dites-nous tout…"
                  />
                </label>
                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Une erreur est survenue. Réessayez ou écrivez-nous directement à{" "}
                    <a href="mailto:info@ciel-ouvert.ch" className="underline">
                      info@ciel-ouvert.ch
                    </a>.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition disabled:opacity-60"
                >
                  {status === "sending" ? "Envoi en cours…" : "Envoyer le message →"}
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div className="rounded-2xl bg-ciel-pale p-8">
              <span className="eyebrow text-bleu-vif">Association Lumera</span>
              <p className="mt-4 font-serif text-2xl text-primary">
                Collectif de jeunes passionnés d'audiovisuel et de communication numérique.
              </p>
              <div className="mt-6 space-y-2 text-sm text-bleu-nuit/80">
                <div>Genève, Suisse</div>
                <a href="mailto:info@ciel-ouvert.ch" className="hover:underline">
                  info@ciel-ouvert.ch
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-minuit p-8 text-white">
              <span className="eyebrow text-soleil">Nous suivre</span>
              <ul className="mt-4 space-y-3 text-ciel-doux">
                <li>
                  <a
                    href="https://www.youtube.com/@cielouvert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    YouTube — Ciel ouvert ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cielouvert"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition"
                  >
                    Instagram @cielouvert ↗
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
