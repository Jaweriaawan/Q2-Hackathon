"use client";

import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

export default async function FetchProducts() {

      const query = `
        *[_type == "product"]{
          productName,
          price,
          category,
          status,
          "productImage": image.asset->url,
          "productSlug": slug.current
        }
      `;
    const products = await client.fetch(query)
      
  
  return (
    <div className="grid grid-cols-3 gap-[40px] pl-[80px]">
      {products.map((Data:any) => (
        <Link href={`products/${Data.productSlug}`} key={Data.productSlug}>
          <div className="w-[550px] h-[800px] hover:shadow-slate-400 hover:shadow-lg shadow-md shadow-slate-300 rounded-lg">
            <img
              src={urlFor(Data.productImage).url()}
              alt=""
              width="550"
              height="480"
            />
            <div className="pl-[20px] pt-[20px] font-sans">
              <p className="text-[20px] text-red-500 font-semibold">{Data.status}</p>
              <h1 className="text-[24px] font-semibold">{Data.productName}</h1>
              <p className="text-[19px] text-gray-400">{Data.category}</p>
              <p className="text-[21px] font-semibold">PKR: {Data.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
