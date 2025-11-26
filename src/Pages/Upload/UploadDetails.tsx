import { Link } from "react-router-dom";

export default function UploadDetails(){
return <div className="flex flex-col justify-center items-center gap-6 p-8 h-full">    
    <h2 className = ""> Add Product Details </h2>
    <input type="text" placeholder="Post Title" className="w-11/12 max-w-md" />
    <img src="" alt="Uploaded Look" className="w-11/12 max-w-md h-64 bg-gray-200" />
    <input type="text" placeholder="Product Name" className="w-11/12 max-w-md" />
    <Link className="rounded-lg p-2 text-white font-bold"to = "/" > Share </Link>
</div>
}