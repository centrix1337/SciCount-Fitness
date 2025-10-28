import Link from "next/link";
import { Instagram } from "lucide-react"; // falls du icons nutzt (npm i lucide-react)

export default function PostfFooter() {
    return (
        <div className="mt-12 text-center text-gray-500 italic">
            Du hast Fragen zu diesem Thema?
            Schreib mir gerne eine DM auf{" "}
            <Link href="https://www.instagram.com/scicount/" className="text-blue-600 hover:underline">
                Instagram
            </Link>
            !
        </div>

    );
}
