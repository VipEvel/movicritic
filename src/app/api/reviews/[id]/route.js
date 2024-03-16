import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Review from "@/models/reviewSchema";

export async function PUT(request, { params }) {
  const { id } = params;
  const { movie, title, rating, name, comment } = await request.json();
  // Connect to the database
  await connectMongoDB();
  await Review.findByIdAndUpdate(id, { movie, title, rating, name, comment });
  return NextResponse.json(
    { message: "Review updated succefully!" },
    { status: 200 }
  );
}

export async function GET(request, { params }) {
  const { id } = params;
  const all = request.nextUrl.searchParams.get("all") === "true";
  try {
    // Connect to the MongoDB database
    await connectMongoDB();
    let reviews;
    if (all) {
      reviews = await Review.find({ movie: id }).exec();
    } else {
      reviews = await Review.findOne({ _id: id });
    }

    return NextResponse.json(
      { message: "Review fetched successfully!", data: reviews },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding review:", error);

    // Return error response
    return NextResponse.json(
      { message: "Error fetching review." },
      { status: 500 }
    );
  }
}
