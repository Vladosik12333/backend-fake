import Event from '../models/EventModel.js';

export const getAllEvent = async (req, res) => {
  try {
    const events = await Event.findAll({
      attributes: ['id', 'photo', 'title', "place"],
    });
    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getEventsByFounderId = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        founder: req.params.id,
      },
    });
    res.json(events);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const events = await Event.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(events[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createEvent = async (req, res) => {
  try {
    const baseReqBody = {
      ...req.body
    };
    await Event.create(baseReqBody);
    res.json({
      message: 'Event Created',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    await Event.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Event Updated',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const counterMembers = async (req, res) => {
  try {
    const event = await Event.findAll({
      where: {
        id: req.params.id,
      },
    });
    const counter = {member: event[0].member + 1}
    await Event.update(counter, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Event Counter Updated',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    await Event.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Event Deleted',
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
