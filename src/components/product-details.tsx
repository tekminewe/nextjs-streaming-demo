import { Product } from "@/app/types";

export const ProductDetails = async ({ id }: { id: number }) => {
  const product: Product = await fetch(
    `http://localhost:3000/api/products/${id}`
  ).then((res) => res.json());

  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
};
