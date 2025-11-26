import { Link } from "react-router-dom";
export default function Header(){
    return(
        <div className="flex justify-between items-center bg-[#e6ccb2] p-4 text-white font-bold text-2xl">
            <Link to = "/">LookFinder</Link>
            <div className="flex space-x-6">
                <Link to = "/upload">
                    Create Look
                </Link>
            </div>

        </div>
    );
}