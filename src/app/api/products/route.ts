import { products } from "@/data/products";
import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(products);
};
