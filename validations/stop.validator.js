const { body, param } = require("express-validator");

const validateStop = [
  body("stopName")
    .exists({ checkFalsy: true })
    .withMessage("stopName is Required")
    .isString()
    .withMessage("stopName Should be String"),
  body("stopCoordinates")
    .exists({ checkFalsy: true })
    .withMessage("stopCoordinates is Required")
    .isString()
    .withMessage("stopCoordinates Should be String"),
];

const validateStopDelete = [
  body("stopId")
    .exists({ checkFalsy: true })
    .withMessage("stopId is Required")
    .custom((stopId) => mongoose.Types.ObjectId.isValid(stopId))
    .withMessage("Invalid stopId format"),
];
const validateGetStop = [
  param("stopId")
    .exists({ checkFalsy: true })
    .withMessage("stopId is Required")
    .custom((stopId) => mongoose.Types.ObjectId.isValid(stopId))
    .withMessage("Invalid stopId format"),
];

module.exports = {
  validateStop,
  validateStopDelete,
  validateGetStop,
};
