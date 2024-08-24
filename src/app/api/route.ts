import { Challenge } from "@/models/challenge";
import { NextResponse } from "next/server";

export async function GET() {
  let data = [];
  for (let index = 0; index < 100; index++) {
    const newChallenge = new Challenge();
    data.push(newChallenge);
  }
  return NextResponse.json({ data: data });

  //return NextResponse.json({ message: "Not found" }, { status: 404 });
}
