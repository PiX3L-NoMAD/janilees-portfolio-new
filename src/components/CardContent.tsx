export default function CardContent({ children }: { children: React.ReactNode }) {
    return <div className="p-4 bg-white rounded shadow-md">{children}</div>;
}