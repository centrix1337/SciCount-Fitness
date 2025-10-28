import ContactForm from "@/components/ContactForm";

export const metadata = {
    title: "Kontakt | SciCount Fitness",
    description: "Kontaktiere mich für Fragen oder Coaching-Anfragen.",
};

export default function ContactPage() {
    return (
        <section className="max-w-lg mx-auto mt-10 px-4">
            <h1 className="text-3xl font-semibold mb-2 text-center">Kontakt</h1>
            <p className="text-gray-600 text-center mb-8">
                Du hast Fragen zu Training oder Ernährung? Schreib mir über das Formular
                oder per{" "}
                <a
                    href="https://www.instagram.com/scicount/"
                    target="_blank" rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                >
                    Instagram
                </a>.
            </p>

            <ContactForm />
        </section>
    );
}
