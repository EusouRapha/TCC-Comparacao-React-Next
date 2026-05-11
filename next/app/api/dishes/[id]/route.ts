import { allDishes } from "@/data/restaurant-data";
import { NextResponse } from "next/server";

type DishesRouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, { params }: DishesRouteContext) {
  const { id } = await params;
  const dish = allDishes.find((item) => item.id === id);

  if (!dish) {
    return NextResponse.json(
      { message: "Prato nao encontrado" },
      { status: 404 },
    );
  }

  return NextResponse.json(dish);
}
