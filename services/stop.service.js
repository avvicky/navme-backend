const Stop = require("../models/stop.model");

const getAllStops = async () => {
  try {
    const stops = await Stop.find();
    return stops;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getStop = async (id) => {
  try {
    const stop = await Stop.find({ _id: id });
    return stop;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createStop = async (data) => {
  const stop = new Stop({
    stopName: data.stopName,
    stopCoordinates: data.stopCoordinates,
  });
  try {
    const newStop = await stop.save();
    return newStop;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateStop = async (data) => {
  try {
    const updatedStop = await Stop.updateOne(
      { _id: data.stopId },
      {
        $set: {
          stopName: data.stopName,
          stopCoordinates: data.stopCoordinates,
        },
      }
    );
    return updatedStop;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteStop = async (id) => {
  try {
    const deletedStop = await Stop.deleteOne({ _id: id });
    return deletedStop;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getAllStops,
  getStop,
  createStop,
  updateStop,
  deleteStop,
};
