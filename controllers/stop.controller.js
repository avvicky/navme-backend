const stopServices = require("../services/stop.service");
const { validationResult } = require("express-validator");
const allStops = async (req, res) => {
  try {
    const stops = await stopServices.getAllStops();
    res.status(200).json(stops);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStop = async (req, res) => {
  const id = req.params.stopId;
  try {
    const stop = await stopServices.getStop(id);
    res.status(200).json(stop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createStop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const data = req.body;
  try {
    const createdStop = await stopServices.createStop(data);
    res.status(200).json(createdStop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const data = req.body;
  try {
    const updatedStop = await stopServices.updateStop(data);
    res.status(200).json(updatedStop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStop = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const id = req.body.stopId;
  try {
    const deletedStop = await stopServices.deleteStop(id);
    res.status(200).json(deletedStop);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  allStops,
  getStop,
  createStop,
  updateStop,
  deleteStop,
};
