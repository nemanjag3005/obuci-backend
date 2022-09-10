import express from "express";
import {
  getListings,
  updateListing,
  deleteListing,
  createListing,
} from "../controllers/listingControllers.js";
const router = express.Router();

router.route("/").get(getListings).post(createListing);

router.route("/:id").delete(deleteListing).put(updateListing);

export default router;
