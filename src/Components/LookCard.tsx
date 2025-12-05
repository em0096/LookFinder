type Product = {
    id: number;
    name: string;
    brand: string;
    formula: string;
    category: string;
    shade: string;
}
type Look = {
    id: number;
    title: string;
    imageURL: string;
    products: Product[];
    userName?: string;
}

export default function LookCard({look}){
    return(
        <article className="">
           <img src={look.imageURL} alt={look.title} />
           <h3>{look.title}</h3>
        </article>
    );
}