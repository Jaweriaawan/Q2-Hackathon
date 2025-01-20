"use client";

import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { add } from "@/app/Redux/cartSlice";
import { urlFor } from "@/sanity/lib/image";

interface Product {
  id: string;
  productName: string;
  price: number;
  inventory: number;
  category: string;
  colors: string;
  status: string;
  description: string;
  productSlug: string;
  productImage: string;
}

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    // Map Product to CartItem
    const cartItem: CartItem = {
      id: product.id,
      name: product.productName,
      price: product.price,
      quantity: 1, // Default quantity
    };
    dispatch(add(cartItem));
  };

  return (
    

    <div className="flex gap-[50px] pl-[350px] pt-[100px] mb-[100px]">
      <img
        src={urlFor(product.productImage).url()}
        alt={product.productName}
        width={'800px'}
        height={'1100px'}
        className="rounded-[10px]"
      />
      <div className="font-sans text-[20px] pt-[100px]">
        <h1 className="text-[26px] font-semibold">{product.productName}</h1>
        <p className="text-[22px] text-gray-400 mt-[10px] font-semibold">
          {product.category}
        </p>
        <p className="text-[19px] text-red-500 font-semibold mt-[10px]">
          {product.status}
        </p>
        <p className="text-[23px] font-semibold mt-[10px]">
          PKR: {product.price}
        </p>
        <p className="text-[22px] text-gray-500 mt-[10px]">
          Color Shown: {product.colors}
        </p>
        <p className="text-[20px] text-gray-600 mt-[20px] w-[600px]">
          {product.description}
        </p>
        <div
          className="w-[450px] h-[60px] bg-black text-white flex pl-[140px] rounded-full mt-[50px] cursor-pointer"
          onClick={handleAdd}
        >
          <button className="font-semibold text-[22px]">Add to cart</button>
          <MdOutlineShoppingCart className="w-[30px] h-[30px] mt-[15px] ml-[10px]" />
        </div>
      </div>
    </div>
  );
}
