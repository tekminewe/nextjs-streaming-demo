import { Product } from "@/app/types";
import Link from "next/link";

export const ProductListItem = ({ product }: { product: Product }) => {
  return (
    <div key={product.id} className="border rounded p-4">
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <div className="flex gap-4 mt-4">
        <Link
          className="bg-blue-600 text-white px-4 py-2 rounded"
          href={`/${product.id}/optimised`}
        >
          View Details (Optimised)
        </Link>
        <Link
          className="bg-blue-600 text-white px-4 py-2 rounded"
          href={`/${product.id}/slow`}
        >
          View Details (Slow)
        </Link>
      </div>
    </div>
  );
};
