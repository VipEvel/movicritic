import connectMongoDB from "@/libs/mongodb";
import Movies from "@/models/movieSchema";
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
  const { id } = params;
  // Connect to the database
  await connectMongoDB();
  const movieDetail = await Movies.findOne({ _id: id });
  return NextResponse.json(
    { message: "Movie details fetched succefully!", data: movieDetail },
    { status: 200 }
  );
}
