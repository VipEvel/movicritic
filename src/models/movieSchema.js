import mongoose, { Schema } from "mongoose";

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

const Movies = mongoose.models.Movies || mongoose.model("Movies", moviesSchema);

export default Movies;
