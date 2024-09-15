import { SimilarProducts } from "@/components/similar-products";
import { ProductDetails } from "@/components/product-details";
import { Suspense } from "react";

export const experimental_ppr = true;

export default async function PartialPrerenderPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Partial Prerender Page</h1>
      <ProductDetails id={+id} />
      {/* Suspense is used to wrap the component that is being loaded dynamically without blocking TTFB */}
      <Suspense fallback={<div>Loading...</div>}>
        <SimilarProducts id={+id} />
      </Suspense>
    </div>
  );
}
