import connectMongoDB from "@/libs/mongodb";
import Movies from "@/models/movieSchema";
import { NextResponse } from "next/server";

export default async function handler(request) {
  console.log(request);
  if(request.method==='POST'){
  const { movieTitle, releaseDate } = await request.json();
  // Connect to the database
  await connectMongoDB();
  await Movies.create({ movieTitle, releaseDate });
  return NextResponse.json(
    { message: "Movie Added Succefully!" },
    { status: 201 }
  );}
}
