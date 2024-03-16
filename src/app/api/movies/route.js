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
    { message: "Movie added succefully!" },
    { status: 201 }
  );
}

export async function GET() {
  // Connect to the database
  await connectMongoDB();
  const moviesList = await Movies.find();
  return NextResponse.json(
    { message: "Movies list fetched succefully!", data: moviesList },
    { status: 200 }
  );
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  // Connect to the database
  await connectMongoDB();
  await Review.deleteMany({ movie: id });
  await Movies.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Movie deleted succefully!" },
    { status: 200 }
  );
}
