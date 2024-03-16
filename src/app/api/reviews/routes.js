import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Review from "@/models/reviewSchema";

export async function POST(request) {
  const { movieid, rating, name, comment } = await request.json();
  // Connect to the database
  await connectMongoDB();
  await Review.create({ movieid, rating, name, comment });
  return NextResponse.json(
    { message: "Review added succefully!" },
    { status: 201 }
  );
}

export async function GET() {
  // Connect to the database
  await connectMongoDB();
  const reviewList = await Review.find();
  return NextResponse.json(
    { message: "Reviews list fetched succefully!", data: reviewList },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // Connect to the database
  await connectMongoDB();
  await Review.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Review deleted succefully!" },
    { status: 200 }
  );
}
