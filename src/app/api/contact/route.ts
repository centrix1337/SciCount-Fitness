import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const form = await req.formData();

        const name = String(form.get("name") ?? "").trim();
        const email = String(form.get("email") ?? "").trim();
        const message = String(form.get("message") ?? "").trim();
        // Honeypot gegen Bots (unsichtbares Feld im Formular)
        const website = String(form.get("website") ?? "");

        if (website) {
            // Bot: still OK, aber nichts tun
            return NextResponse.json({ ok: true });
        }

        // Validierung
        if (!name || !email || !message) {
            return NextResponse.json(
                { ok: false, error: "Bitte alle Felder ausfüllen." },
                { status: 400 }
            );
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { ok: false, error: "E-Mail-Adresse ist ungültig." },
                { status: 400 }
            );
        }

        // Mail an dich
        const toOwner = resend.emails.send({
            from: process.env.MAIL_FROM!,
            to: process.env.MAIL_TO!,
            subject: `Neue Kontaktanfrage von ${name}`,
            replyTo: email,
            text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
        });

        // Auto-Reply an Sender (optional)
        const toSender = resend.emails.send({
            from: process.env.MAIL_FROM!,
            to: email,
            subject: "Danke für deine Nachricht ✌️",
            text:
                `Hey ${name},\n\n` +
                `danke für deine Nachricht! Ich melde mich so schnell wie möglich bei dir.\n\n` +
                `— SciCount Fitness`,
        });

        await Promise.all([toOwner, toSender]);

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("contact api error", err);
        return NextResponse.json(
            { ok: false, error: "Serverfehler. Bitte später nochmal." },
            { status: 500 }
        );
    }
}
