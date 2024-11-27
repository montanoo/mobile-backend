import { prisma } from "../utils/prisma.js";

async function registerAttendance(eventId, user) {
  return await prisma.eventUser.create({
    data: {
      userId: user.id,
      eventId: eventId,
      attendance: true,
    },
  });
}

async function showMyRegisteredEvents(user) {
  return await prisma.eventUser.findMany({
    where: {
      userId: user.id,
    },
  });
}

export default { registerAttendance, showMyRegisteredEvents };
