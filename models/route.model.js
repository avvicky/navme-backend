const mongoose = require("mongoose");

const routeStopSchema = new mongoose.Schema({
  stop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Stop",
    required: true,
  },
  stopOrder: {
    type: Number,
    required: true,
  },
});

const routeSchema = new mongoose.Schema({
  routeName: {
    type: String,
    required: true,
  },
  stops: {
    type: [routeStopSchema],
    required: true,
  },
});

module.exports = mongoose.model("Route", routeSchema);
