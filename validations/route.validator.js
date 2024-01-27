const { body, param } = require("express-validator");
const mongoose = require("mongoose");

const validateRoute = [
  body("routeName")
    .exists({ checkFalsy: true })
    .withMessage("RouteName is Required")
    .isString()
    .withMessage("RouteName Should be String"),

  body("stops")
    .isArray({ min: 1 })
    .withMessage("Stops should be a non-empty array")
    .custom((stopsArray) => {
      // Custom validation to check each element in the stops array
      const isValid = stopsArray.every((stop) => {
        // Validate that each stop in the array matches routeStopSchema
        return (
          mongoose.Types.ObjectId.isValid(stop.stop) &&
          typeof stop.stopOrder === "number" &&
          Number.isInteger(stop.stopOrder) &&
          stop.stopOrder >= 0
        );
      });

      if (!isValid) {
        throw new Error("Invalid structure for one or more stops");
      }

      return true;
    }),
];

const validateDeleteRoute = [
  body("routeId")
    .exists({ checkFalsy: true })
    .withMessage("routeId is Required")
    .custom((routeId) => mongoose.Types.ObjectId.isValid(routeId))
    .withMessage("Invalid routeId format"),
];

const validateGetRoute = [
  param("routeId")
    .exists({ checkFalsy: true })
    .withMessage("routeId is Required")
    .custom((routeId) => mongoose.Types.ObjectId.isValid(routeId))
    .withMessage("Invalid routeId format"),
];

module.exports = {
  validateRoute,
  validateDeleteRoute,
  validateGetRoute,
};
