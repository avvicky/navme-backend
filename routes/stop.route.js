const express = require("express");
const router = express.Router();
const stopValidators = require("../validations/stop.validator");
const stopController = require("../controllers/stop.controller");

/**
 * @swagger
 * tags:
 *   name: Stops
 *   description: API for managing Stops
 */

/**
 * @swagger
 * /api/stops:
 *   get:
 *     summary: Get all stops
 *     tags: [Stops]
 *     responses:
 *       200:
 *         description: List of stops
 */

router.get("/", stopController.allStops);

/**
 * @swagger
 * /api/stops/{stopId}:
 *   get:
 *     summary: Get stops
 *     parameters:
 *       - in: path
 *         name: stopId
 *         schema:
 *           type: string
 *         required: true
 *     tags: [Stops]
 *     responses:
 *       200:
 *         description: Details of the stop
 */

router.get("/", stopValidators.validateGetStop, stopController.getStop);

/**
 * @swagger
 * /api/stops:
 *   post:
 *     summary: Create a new Stop
 *     tags: [Stops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stopName:
 *                 type: string
 *               stopCoordinates:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created Stop
 */

router.post("/", stopValidators.validateStop, stopController.createStop);

/**
 * @swagger
 * /api/stops:
 *   put:
 *     summary: Edit a Stop
 *     tags: [Stops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stopsId:
 *                 type: string
 *               stopName:
 *                 type: string
 *               stopCoordinates:
 *                 type: string
 *     responses:
 *       201:
 *         description: The Edited Stop
 */

router.put("/", stopValidators.validateStop, stopController.updateStop);

/**
 * @swagger
 * /api/stops:
 *   delete:
 *     summary: Delete particular stop
 *     tags: [Stops]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               stopsId:
 *                 type: string
 */

router.delete(
  "/",
  stopValidators.validateStopDelete,
  stopController.deleteStop
);

module.exports = router;
