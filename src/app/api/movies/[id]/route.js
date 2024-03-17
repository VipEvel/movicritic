import connectMongoDB from "@/libs/mongodb";
import Movies from "@/models/movieSchema";
import Reviews from "@/models/reviewSchema";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { movieTitle, releaseDate } = await request.json();

    // Connect to the database
    await connectMongoDB();

    // Update the movie
    await Movies.findByIdAndUpdate(id, { movieTitle, releaseDate });

    // Return success response
    return NextResponse.json(
      { message: "Movie updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating movie:", error);
    return NextResponse.json(
      { message: "Error updating movie." },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;

    // Connect to the database
    await connectMongoDB();

    // Find the movie details by id
    const movieDetail = await Movies.findOne({ _id: id });

    // Aggregate pipeline to calculate average rating for the movie
    const averageRatingResult = await Reviews.aggregate([
      {
        $match: { movie: movieDetail._id },
      },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    // Extract average rating from aggregation result
    const averageRating =
      averageRatingResult.length > 0
        ? averageRatingResult[0].averageRating
        : null;

    // Append the average rating to the movie detail object
    const movieDetailWithAvgRating = {
      ...movieDetail.toObject(),
      averageRating,
    };

    return NextResponse.json(
      {
        message: "Movie details fetched successfully!",
        data: movieDetailWithAvgRating,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return NextResponse.error(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
