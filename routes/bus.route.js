const express = require("express");
const router = express.Router();
const busValidator = require("../validations/bus.validator");
const busController = require("../controllers/bus.controller");

/**
 * @swagger
 * tags:
 *   name: Buses
 *   description: API for managing buses
 */

/**
 * @swagger
 * /api/buses:
 *   get:
 *     summary: Get all buses
 *     tags: [Buses]
 *     responses:
 *       200:
 *         description: List of buses
 */
router.get("/", busController.allBuses);

/**
 * @swagger
 * /api/buses/{id}:
 *   get:
 *     summary: Get detail of Specific bus
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     tags: [Buses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Detils of bus
 */

router.get("/:busId", busValidator.validateGetBus, busController.getBus);

/**
 * @swagger
 * /api/buses:
 *   post:
 *     summary: Create a new bus
 *     tags: [Buses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               busNumber:
 *                 type: string
 *               driverName:
 *                 type: string
 *               driverPhoneNumber:
 *                 type: string
 *     responses:
 *       201:
 *         description: The created bus
 */
router.post("/", busValidator.validateBus, busController.createBus);

/**
 * @swagger
 * /api/buses:
 *   put:
 *     summary: Update a bus
 *     tags: [Buses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               busNumber:
 *                 type: string
 *               id:
 *                 type: string
 *     responses:
 *       201:
 *         description: The Updated Bus
 */

router.put("/", busValidator.validateBus, busController.updateBus);

/**
 * @swagger
 * /api/buses:
 *   delete:
 *     summary: Delete a bus
 *     tags: [Buses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               busId:
 *                 type: string
 *     responses:
 *       201:
 *         description: The Deleted Bus
 */

router.delete("/", busValidator.validateBusDelete, busController.deleteBus);

module.exports = router;
