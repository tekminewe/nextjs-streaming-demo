import { SimilarProducts } from "@/components/similar-products";
import { ProductDetails } from "@/components/product-details";

export default async function WithoutPartialPrerenderPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Without Partial Prerender Page</h1>
      <ProductDetails id={+id} />
      <SimilarProducts id={+id} />
    </div>
  );
}
