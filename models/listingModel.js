import mongoose from "mongoose";

const listingSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a title."],
    },
    description: {
      type: String,
      required: [true, "Please add a description."],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Listing", listingSchema);
