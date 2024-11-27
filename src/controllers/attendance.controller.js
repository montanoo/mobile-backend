import attendanceService from "../services/attendance.service.js";

export const joinEvent = async (req, res) => {
  try {
    const { eventId } = req.body;
    const response = await attendanceService.registerAttendance(
      eventId,
      req.user
    );

    return res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal error" });
  }
};

export const showJoinedEvents = async (req, res) => {
  try {
    const response = await attendanceService.showMyRegisteredEvents(req.user);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal error" });
  }
};
