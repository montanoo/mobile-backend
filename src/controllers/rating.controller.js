import ratingService from "../services/rating.service.js";

export const createRating = async (req, res) => {
  try {
    const { eventId, rating, comment } = req.body;
    const response = await ratingService.registerRating(
      eventId,
      req.user.id,
      rating,
      comment
    );

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
