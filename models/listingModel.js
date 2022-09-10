import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title."],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Listing", listingSchema);
