import userService from "../services/user.service.js";

export const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const response = await userService.createUser({
      username,
      email,
      password,
    });

    console.log(response);
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const response = await userService.loginUser(email, password);
    console.log(response);

    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
