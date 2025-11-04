"use client";

import { useState } from "react";

export default function ContactForm() {
    const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const fd = new FormData(form);

        try {
            setStatus("sending");

            const res = await fetch("/api/contact", { method: "POST", body: fd });

            // Demo:
            await new Promise((r) => setTimeout(r, 500));
            setStatus("ok");
            form.reset();
        } catch {
            setStatus("error");
        }
    }

    return (
        <form onSubmit={onSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input id="name" name="name" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black" />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium">E-Mail</label>
                <input id="email" name="email" type="email" required className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black" />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium">Nachricht</label>
                <textarea id="message" name="message" rows={5} required className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black" />
            </div>

            <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 disabled:opacity-60"
            >
                {status === "sending" ? "Sende…" : "Senden"}
            </button>

            {status === "ok" && (
                <p className="text-green-700 text-sm">Danke! Deine Nachricht wurde gesendet.</p>
            )}
            {status === "error" && (
                <p className="text-red-700 text-sm">Upps – das hat nicht geklappt. Bitte später nochmal.</p>
            )}
        </form>
    );
}
