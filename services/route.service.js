const Route = require("../models/route.model");

const getAllRoutes = async () => {
  try {
    const routes = Route.find().populate({ path: "stops.stop" });
    return routes;
  } catch (err) {
    throw new Error({ message: err.message });
  }
};

const getRoute = async (id) => {
  try {
    const route = await Route.find({ _id: id }).populate({
      path: "stops.stop",
    });
    return route;
  } catch (err) {
    throw new Error({ message: err.message });
  }
};

const createRoute = async (data) => {
  const route = new Route({
    routeName: data.routeName,
    stops: data.stops,
  });

  try {
    const newRoute = await route.save();
    return newRoute;
  } catch (err) {
    throw new Error({ message: err.message });
  }
};

const updateRoute = async (data) => {
  try {
    const updatedRoute = Route.updateOne(
      { _id: data.routeId },
      {
        $set: {
          routeName: data.routeName,
          stops: data.stops,
        },
      }
    );
    return updatedRoute;
  } catch (err) {
    throw new Error({ message: err.message });
  }
};

const deleteRoute = async (id) => {
  try {
    const deletedRoute = Route.deleteOne({ _id: id });
    return deletedRoute;
  } catch (err) {
    throw new Error({ message: err.message });
  }
};

module.exports = {
  getAllRoutes,
  getRoute,
  createRoute,
  updateRoute,
  deleteRoute,
};
