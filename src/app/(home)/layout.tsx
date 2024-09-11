

export default function Landinglayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (

        <div className="relative flex  overflow-hidden">
            {children}
        </div>
    );
}



