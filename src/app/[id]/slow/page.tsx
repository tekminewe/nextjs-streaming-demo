import { SimilarProducts } from "@/components/similar-products";
import { ProductDetails } from "@/components/product-details";

export default async function ProductDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div className="p-4 space-y-4">
      <h1 className="font-semibold">Product Details (Optimised)</h1>
      <ProductDetails id={+id} />
      <h2 className="font-semibold">Similar Products</h2>
      <SimilarProducts id={+id} />
    </div>
  );
}
