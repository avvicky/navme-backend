const { body, param } = require("express-validator");
const mongoose = require("mongoose");

const validateBus = [
  body("busNumber")
    .exists({ checkFalsy: true })
    .withMessage("BusNumber is Required")
    .isString()
    .withMessage("BusNumber Should be String"),
  body("driverName")
    .exists({ checkFalsy: true })
    .withMessage("DriverName is Required")
    .isString()
    .withMessage("DriverName should be String"),
  body("driverPhoneNumber")
    .exists({ checkFalsy: true })
    .withMessage("DriverPhoneNumber is Required")
    .isString()
    .withMessage("DriverPhoneNumber should be String"),
];

const validateBusDelete = [
  body("busId")
    .exists({ checkFalsy: true })
    .withMessage("busId is Required")
    .custom((busId) => mongoose.Types.ObjectId.isValid(busId))
    .withMessage("Invalid BusId format"),
];

const validateGetBus = [
  param("busId")
    .exists({ checkFalsy: true })
    .withMessage("BusId is Required")
    .custom((busId) => mongoose.Types.ObjectId.isValid(busId))
    .withMessage("Invalid BusId format"),
];

module.exports = {
  validateBus,
  validateBusDelete,
  validateGetBus,
};
