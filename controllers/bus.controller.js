const busService = require("../services/bus.service");
const { validationResult } = require("express-validator");

const allBuses = async (req, res) => {
  try {
    const buses = await busService.findAllBus();
    res.status(200).json(buses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getBus = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const id = req.params.busId;
  try {
    const bus = await busService.getBus(id);
    res.status(200).json(bus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBus = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const data = req.body;
  try {
    const createdBus = await busService.createBus(data);
    res.status(200).json(createdBus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBus = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const data = req.body;
  try {
    const updatedBus = await busService.updateBus(data);
    res.status(200).json(updatedBus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteBus = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const id = req.body.busId;
  try {
    const deletedBus = await busService.deleteBus(id);
    res.status(200).json(deletedBus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  allBuses,
  getBus,
  createBus,
  updateBus,
  deleteBus,
};
