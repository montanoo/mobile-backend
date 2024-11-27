import { prisma } from "../utils/prisma.js";

async function registerRating(eventId, userId, rating, comment = null) {
  return await prisma.rating.create({
    data: {
      userId,
      eventId,
      comment,
      rating,
    },
  });
}

export default { registerRating };
