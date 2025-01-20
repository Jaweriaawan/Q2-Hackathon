"use client"
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/query"; // Adjust the path to where your store is defined.

export default function Navbar() {
  const item = useSelector((state: RootState) => state.cart); // Accessing the cart state

  return (
    <div>
      <div className="flex bg-slate-400 bg-opacity-20 w-full h-[100px] border-b-[3px] border-black mb-[50px] justify-around pt-[20px]">
        <Link href="/" className="text-[25px] font-bold">
          Home
        </Link>
        <Link href="/cart" className="text-[25px] font-bold">
          Cart ({item.length}) {/* Example: Display cart item count */}
        </Link>
        <IoBagOutline className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
}



// import Link from "next/link"
// import { IoBagOutline } from "react-icons/io5";
// import { useSelector } from "react-redux";
// import { Provider } from "react-redux";

// export default function Navbar(){
//      <Provider>
//          const item = useSelector((state)=> state.cart)
//      </Provider>
//  return <div>
//   <div className="flex bg-slate-400 bg-opacity-20 w-full h-[100px] border-b-[3px] border-black mb-[50px] justify-around pt-[20px]">
//      <Link href="/" className="text-[25px] font-bold">Home</Link>
//      <Link href="/" className="text-[25px] font-bold">Cart</Link>
//      <IoBagOutline className="w-[28px] h-[28px]" />
//   </div>
// </div>
// }