const express = require("express");
const router = express.Router();
const routeValidators = require("../validations/route.validator");
const routeController = require("../controllers/route.controller");

/**
 * @swagger
 * tags:
 *   name: Routes
 *   description: API for managing Routes
 */

/**
 * @swagger
 * /api/routes:
 *   get:
 *     summary: Get all routes
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: List of buses
 */
router.get("/", routeController.allRoutes);

/**
 * @swagger
 * /api/routes/{routeid}:
 *   get:
 *     summary: Get  specifc route
 *     parameters:
 *       - in: path
 *         name: routeId
 *         schema:
 *           type: string
 *         required: true
 *     tags: [Routes]
 *     responses:
 *       200:
 *         description: Details of route
 */

router.get(
  "/:routeId",
  routeValidators.validateGetRoute,
  routeController.getRoute
);

/**
 * @swagger
 * /api/routes:
 *   post:
 *     summary: Create a new Route
 *     tags: [Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routeName:
 *                 type: string
 *                 required: true
 *               stops:
 *                 type: [Strings]
 *                 required: true
 *     responses:
 *       201:
 *         description: The created route
 */
router.post("/", routeValidators.validateRoute, routeController.createRoute);

/**
 * @swagger
 * /api/routes:
 *   put:
 *     summary: Update a Route
 *     tags: [Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 required: true
 *               routeName:
 *                 type: string
 *                 required: true
 *               stops:
 *                 type: [Strings]
 *                 required: true
 *     responses:
 *       201:
 *         description: The updated route
 */

router.put("/", routeValidators.validateRoute, routeController.updateRoute);
/**
 * @swagger
 * /api/routes:
 *   delete:
 *     summary: delete a Route
 *     tags: [Routes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               routeId:
 *                 type: string
 *                 required: true
 *
 *     responses:
 *       201:
 *         description: The deleted route
 */
router.delete(
  "/",
  routeValidators.validateDeleteRoute,
  routeController.deleteRoute
);
module.exports = router;
