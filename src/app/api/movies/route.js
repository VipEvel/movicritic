import connectMongoDB from "@/libs/mongodb";
import Movies from "@/models/movieSchema";
import Review from "@/models/reviewSchema";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { movieTitle, releaseDate } = await request.json();
  // Connect to the database
  await connectMongoDB();
  await Movies.create({ movieTitle, releaseDate });
  return NextResponse.json(
    { message: "Movie added successfully!" },
    { status: 201 }
  );
}

export async function GET() {
  try {
    // Connect to the database
    await connectMongoDB();

    // Aggregate pipeline to fetch movies with average ratings
    const moviesList = await Movies.aggregate([
      {
        $lookup: {
          from: "reviews", // Assuming the name of the reviews collection
          localField: "_id",
          foreignField: "movie",
          as: "reviews",
        },
      },
      {
        $addFields: {
          averageRating: { $avg: "$reviews.rating" },
        },
      },
    ]);
    return NextResponse.json(
      { message: "Movies list fetched successfully!", data: moviesList },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching movies:", error);
    return NextResponse.error(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // Connect to the database
  await connectMongoDB();
  await Review.deleteMany({ movie: id });
  await Movies.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Movie deleted successfully!" },
    { status: 200 }
  );
}
