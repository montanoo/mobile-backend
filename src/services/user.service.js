import { prisma } from "../utils/prisma.js";
import { signToken } from "../utils/token.js";

async function createUser(user) {
  const response = await prisma.user.create({
    data: user,
  });

  const token = signToken(response);

  return { token, user: response };
}

async function loginUser(email, password) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  const token = signToken(user);
  return { token, user };
}

export default { createUser, loginUser };
