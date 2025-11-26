import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        // page wrapper
        <div className="flex flex-col min-h-screen min-w-screen bg-pink-50 text-black">
            <Header />
            <main className="flex-1 bg-[#ede0d4] p-4">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}