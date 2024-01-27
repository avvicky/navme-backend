const routeServices = require("../services/route.service");
const { validationResult } = require("express-validator");

const allRoutes = async (req, res) => {
  try {
    const routes = await routeServices.getAllRoutes();
    res.status(200).json(routes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRoute = async (req, res) => {
  const id = req.params.routeId;
  try {
    const route = await routeServices.getRoute(id);
    res.status(200).json(route);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRoute = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const data = req.body;
  try {
    const createdRoute = await routeServices.createRoute(data);
    res.status(200).json(createdRoute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRoute = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const data = req.body;
  try {
    const updatedRoute = await routeServices.updateRoute(data);
    res.status(200).json(updatedRoute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteRoute = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
  const id = req.body.routeId;
  try {
    const deletedRoute = await routeServices.deleteRoute(id);
    res.status(200).json(deletedRoute);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  allRoutes,
  getRoute,
  createRoute,
  updateRoute,
  deleteRoute,
};
