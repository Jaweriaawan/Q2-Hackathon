import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"

export default async function FetchProducts(){
  const query = `
  *[_type == "product"]{
  productName,
    price,
    category,
    status,
    "productImage": image.asset ->url
}
  `
  const FetchData = await client.fetch(query)

 return (
  <div className="grid grid-cols-3 gap-[40px]">
    {
      FetchData.map((Data : any) => (
        <div key={Data.id} className="w-[550px] h-[730px] hover:shadow-slate-400 hover:shadow-lg shadow-md shadow-slate-300 rounded-lg">
               <img src={urlFor(Data.productImage).url()} alt="" width={'550px'} height={'480px'} />
               <div className="pl-[20px] pt-[20px] font-sans">
                <h1 className="text-[22px] font-semibold">{Data.productName}</h1>
                <p className="text-[18px] text-gray-400">{Data.category}</p>
                <p className="text-[19px] text-red-500 font-semibold">{Data.status}</p>
                <p className="text-[18px] font-semibold">{Data.price}</p>
              </div>
        </div>
      ))
    }
  </div> 
)
}