import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Review from "@/models/reviewSchema";

export async function POST(request) {
  try {
    // Parse the incoming JSON request body
    const { movie, title, rating, name, comment } = await request.json();
    // Connect to the MongoDB database
    await connectMongoDB();
    // Create a new review using the Review model
    const newReview = new Review({ movie, title, rating, name, comment });
    await newReview.save();
    // Return success response
    return NextResponse.json(
      { message: "Review added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding review:", error);

    // Return error response
    return NextResponse.json(
      { message: "Error adding review." },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // Connect to the database
  await connectMongoDB();
  await Review.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Review deleted successfully!" },
    { status: 200 }
  );
}
