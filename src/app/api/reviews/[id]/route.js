import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Review from "@/models/reviewSchema";

export async function PUT(request, { parmas }) {
  const { id } = parmas;
  const { movieid, rating, name, comment } = await request.json();
  // Connect to the database
  await connectMongoDB();
  await Review.findByIdAndUpdate(id, { movieid, rating, name, comment });
  return NextResponse.json(
    { message: "Review updated succefully!" },
    { status: 200 }
  );
}
