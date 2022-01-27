const express = require('express')
const http = require('http');
const bodyParser = require('body-parser')
const dotenv = require("dotenv");

/* #region Environment variables */
//Initialize the environment configuration
dotenv.config();

//Get the environment variables for the host
const host = process.env.host || "localhost";
const port = process.env.PORT || 3000; // default port to listen
/* #endregion */

/* #region  Webserver initialisation */

const app = express();
// Automatically parse the request body as JSON
app.use(bodyParser.json());
//initialize a simple http server
const server = http.createServer(app);

/* #region Routes */
// define a default route handler for the root endpoint
app.get("/", (req, res) => {
    res.send("ONLINE");
});

//Set the routes
require("./routes/obj.routes.js")(app);

/* #endregion */

// start the Express server
server.listen(port, () => {
    console.log(`server started at http://${host}:${port}`);
});
/* #endregion */

/* #region  Termination signal handlers */
process.once('SIGUSR2', function () {
    process.kill(process.pid, 'SIGUSR2');
});

process.on('SIGINT', function () {
    // this is only called on ctrl+c, not restart
    process.kill(process.pid, 'SIGINT');
});
/* #endregion */