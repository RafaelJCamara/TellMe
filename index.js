const express = require("express")
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

//enable .env
dotenv.config();

app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});