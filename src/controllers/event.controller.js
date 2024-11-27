import eventService from "../services/event.service.js";

export const showEvents = async (req, res) => {
  try {
    const events = await eventService.showEvents();
    return res.status(200).json(events);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createEvent = async (req, res) => {
  try {
    const { title, description, date, location, time } = req.body;

    const response = await eventService.createEvent({
      title,
      description,
      date: new Date(date),
      location,
      time: new Date(time),
      user: req.user,
    });

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
