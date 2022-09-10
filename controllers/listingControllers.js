import asyncHandler from "express-async-handler";
import Listing from "../models/listingModel.js";

// @desc Gets all listings
// @route GET /api/listings
// @access Public

export const getListings = asyncHandler(async (req, res) => {
  const listings = await Listing.find();
  res.status(200).json(listings);
});

// @desc creates listing
// @route POST /api/listings
// @access Private

export const createListing = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a text field.");
  }
  const listing = await Listing.create({
    title: req.body.title,
  });
  res.status(200).json(listing);
});

// @desc Updates listing
// @route PUT /api/listings/:id
// @access Private

export const updateListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Oglas nije nadjen.");
  }

  const updatedListing = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedListing);
});

// @desc Deletes listing
// @route DELETE /api/listings/:id
// @access Private

export const deleteListing = asyncHandler(async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  if (!listing) {
    res.status(400);
    throw new Error("Oglas nije nadjen.");
  }

  await listing.remove();
  res.status(200).json({ id: req.params.id });
});
