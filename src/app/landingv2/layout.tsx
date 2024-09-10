
import Navbar from "@/components/layout/navbar";



export default function Landinglayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="relative flex  overflow-hidden">
                <main className="flex-1 overflow-y-auto relative">
                    <div className="fixed inset-0 bg-bg-auth bg-cover bg-center"></div>
                    <div className="relative ">
                        {children}
                    </div>
                </main>
            </div>
        </>
    );
}



