import { Product } from "@/app/types";

export const SimilarProducts = async ({ id }: { id: number }) => {
  const products: Product[] = await fetch(
    `http://localhost:3000/api/products/${id}/similar`
  ).then((res) => res.json());

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <p>Name: {product.name}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
};
