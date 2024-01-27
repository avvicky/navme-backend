const Bus = require("../models/bus.model");

const findAllBus = async () => {
  try {
    const buses = await Bus.find();
    return buses;
  } catch (err) {
    throw new Error(err.message);
  }
};

const getBus = async (id) => {
  try {
    const bus = await Bus.find({ _id: id });
    return bus;
  } catch (err) {
    throw new Error(err.message);
  }
};

const createBus = async (data) => {
  const bus = new Bus({
    busNumber: data.busNumber,
    driverName: data.driverName,
    driverPhoneNumber: data.driverPhoneNumber,
  });
  try {
    const newBus = await bus.save();
    return newBus;
  } catch (err) {
    throw new Error(err.message);
  }
};

const updateBus = async (data) => {
  try {
    const updatedBus = await Bus.updateOne(
      { _id: data.id },
      {
        $set: {
          busNumber: data.busNumber,
          driverName: data.driverName,
          driverPhoneNumber: data.driverPhoneNumber,
        },
      }
    );
    return updatedBus;
  } catch (err) {
    throw new Error(err.message);
  }
};

const deleteBus = async (id) => {
  try {
    const deletedBus = await Bus.deleteOne({ _id: id });
    return deletedBus;
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  findAllBus,
  getBus,
  createBus,
  updateBus,
  deleteBus,
};
