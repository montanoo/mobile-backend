import { prisma } from "../utils/prisma.js";

async function createEvent(event) {
  const { title, description, date, location, user, time } = event;
  return await prisma.event.create({
    data: {
      title,
      description,
      date,
      location,
      time,
      organizer: {
        connect: {
          id: user.id,
        },
      },
    },
  });
}

async function showEvents() {
  return await prisma.event.findMany({
    include: {
      organizer: true,
    },
  });
}

export default { createEvent, showEvents };
