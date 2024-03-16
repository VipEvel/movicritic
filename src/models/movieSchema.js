import mongoose, { Schema } from "mongoose";
import Review from "@/models/reviewSchema";

const moviesSchema = new Schema(
  {
    movieTitle: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

moviesSchema.pre("remove", async function (next) {
  const movieId = this._id;
  try {
    // Delete all reviews associated with the movie ID
    await Review.deleteMany({ movie: movieId });
    next();
  } catch (error) {
    next(error);
  }
});

const Movies = mongoose.models.Movies || mongoose.model("Movies", moviesSchema);

export default Movies;
