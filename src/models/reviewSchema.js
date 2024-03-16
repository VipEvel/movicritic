import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({
  movie: { type: Schema.Types.ObjectId, ref: "Movie" },
  rating: Number,
  name: String,
  comment: String,
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

module.exports = Review;
