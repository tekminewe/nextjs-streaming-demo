import { ProductList } from "@/components/product-list";

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="font-semibold">Mint Commerce</h1>
      <p className="mb-8">Welcome to the Mint Commerce store!</p>
      <ProductList />
    </div>
  );
}
