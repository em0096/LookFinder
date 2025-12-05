export default function Footer(){
    return(
        <div className="flex justify-center bg-[#e6ccb2] p-2 text-white">
            © {new Date().getFullYear()} LookFinder. All rights reserved.
        </div>
    );
}