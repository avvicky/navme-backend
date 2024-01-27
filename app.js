const express = require("express");
const mongoose = require("mongoose");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();

const app = express();
const config = require("./config");

// MongoDB Connection
mongoose
  .connect(config.mongoURI, {})
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Swagger Configurations
const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "College Bus Service API",
      version: "1.0.0",
      description: "API documentation for the College Bus Service",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Routes
const busRoutes = require("./routes/bus.route");
const routeRoutes = require("./routes/route.route");
const stopRoutes = require("./routes/stop.route");

app.use("/api/buses", busRoutes);
app.use("/api/routes", routeRoutes);
app.use("/api/stops", stopRoutes);

// Start the server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
