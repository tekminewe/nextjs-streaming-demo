import { Product } from "@/app/types";
import { ProductListItem } from "./product-list-item";

export const SimilarProducts = async ({ id }: { id: number }) => {
  let products: Product[] = [];
  try {
    products = await fetch(
      `http://localhost:3000/api/products/${id}/similar`
    ).then((res) => res.json());
    // Uncomment to simulate error
    // throw new Error("Simulated error for testing");
  } catch (e) {
    console.error("Error fetching similar products:", e);
    return <div>Failed to load similar products. Please refresh the page</div>;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductListItem key={product.id} product={product} />
      ))}
    </div>
  );
};
