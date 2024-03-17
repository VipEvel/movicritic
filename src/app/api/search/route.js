import Movies from "@/models/movieSchema";
import { NextResponse } from "next/server";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  try {
    // Using a regular expression to match titles containing the query string case-insensitively
    const titleRegex = new RegExp(query, "i");

    // Search for movies with title or releaseDate matching the query
    const result = await Movies.find({
      $or: [{ movieTitle: { $regex: titleRegex } }],
    });
    return NextResponse.json(
      { message: "Movies fetched successfully!", data: result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error searching movies:", error);
    return NextResponse.json(
      { message: "Internal server error", data: [] },
      { status: 500 }
    );
  }
}
