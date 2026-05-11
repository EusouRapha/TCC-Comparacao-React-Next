import { dailyMenus } from "@/data/restaurant-data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(dailyMenus);
}
