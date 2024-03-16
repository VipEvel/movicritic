import connectMongoDB from "@/libs/mongodb";
import Movies from "@/models/movieSchema";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { movieTitle, releaseDate } = request.json();
  // Connect to the database
  await connectMongoDB();
  await Movies.findByIdAndUpdate(id, { movieTitle, releaseDate });
  return NextResponse.json(
    { message: "Movie updated succefully!" },
    { status: 200 }
  );
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
