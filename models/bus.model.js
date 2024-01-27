const mongoose = require("mongoose");
const Route = require("./route.model");

const busSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  driverPhoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bus", busSchema);
