import { products } from "@/data/products";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  return NextResponse.json(products.find((product) => product.id === +id));
};
