export default function Callout({
                                    type = "tip",
                                    children,
                                }: { type?: "tip" | "warn" | "info"; children: React.ReactNode }) {
    const colors =
        type === "tip"
            ? "bg-green-50 border-green-400 text-green-800"
            : type === "warn"
                ? "bg-yellow-50 border-yellow-400 text-yellow-800"
                : "bg-blue-50 border-blue-400 text-blue-800";

    return (
        <div className={`border-l-4 p-3 my-4 rounded ${colors}`}>
            {children}
        </div>
    );
}
