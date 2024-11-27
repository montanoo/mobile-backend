import commentService from "../services/comment.service.js";

export const comment = async (req, res) => {
  try {
    const { content, eventId } = req.body;
    const response = await commentService.createComment(
      content,
      req.user.id,
      eventId
    );
    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
