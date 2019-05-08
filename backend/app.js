const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/index");
const errorHandlers = require("./handlers/errorHandlers");
const path = require('path');

const app = express();

// serve up static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

if (app.get("env") === "development") {
  // Allow Cross-Origin requests in dev mode
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
}
app.use("/", routes);
// 404 handler
app.use(errorHandlers.notFound);

if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

module.exports = app;
