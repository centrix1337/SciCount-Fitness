export default function Container({ children }: { children: React.ReactNode }) {
    return <div className="mx-auto w-full sm:px-6 lg:px-8">{children}</div>;
}

