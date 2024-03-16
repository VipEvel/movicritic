import Movies from "@/models/movieSchema";

export async function GET(request) {
  const query = request.nextUrl.searchParams.get("query");
  try {
    // Using a regular expression to match titles containing the query string case-insensitively
    const titleRegex = new RegExp(query, "i");

    // Search for movies with title or releaseDate matching the query
    const movies = await Movies.find({
      $or: [
        { title: titleRegex },
        { releaseDate: titleRegex }, // You can modify this to match the release date however you want
      ],
    });

    return NextResponse.json(
      { message: "Movies fetched successfully!", data: movies },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error searching movies:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
