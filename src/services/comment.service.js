import { prisma } from "../utils/prisma.js";

async function createComment(content, userId, eventId) {
  return await prisma.comment.create({
    data: {
      content,
      userId,
      eventId,
    },
  });
}

export default { createComment };
