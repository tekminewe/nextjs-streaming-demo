import { products } from "@/data/products";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) => {
  // Simulate a delay of 5 seconds
  const delayResponse = new Promise((resolve) => setTimeout(resolve, 5000));

  await delayResponse;
  return NextResponse.json(products.filter((product) => product.id !== +id));
};
