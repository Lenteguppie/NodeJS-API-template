module.exports = (app) =>{
    // Import the controller
    const obj = require("../controllers/obj.controller.js");

    // Get last entry of object
    app.get("/object/:id", obj.getLast)
    app.post("/register/", obj.register)
}

