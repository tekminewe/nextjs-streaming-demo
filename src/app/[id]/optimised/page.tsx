import { SimilarProducts } from "@/components/similar-products";
import { ProductDetails } from "@/components/product-details";
import { Suspense } from "react";

export const experimental_ppr = true;

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
      {/* Suspense is used to wrap the component that is being loaded dynamically without blocking TTFB */}
      <Suspense fallback={<div>Loading...</div>}>
        <SimilarProducts id={+id} />
      </Suspense>
    </div>
  );
}
