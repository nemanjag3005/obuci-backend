import express from "express";
import {
  getListings,
  updateListing,
  deleteListing,
  createListing,
} from "../controllers/listingControllers.js";
import protect from "../middleware/authMiddleware.js";
const router = express.Router();

router.route("/").get(getListings).post(protect, createListing);

router.route("/:id").delete(protect, deleteListing).put(protect, updateListing);

export default router;
