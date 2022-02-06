const express = require("express")
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const conversationRoute = require("./routes/conversation");
const homepageRoute = require("./routes/homepage")
//io is a function that we call to get an individual socket
//import {io} from 'socket.io-client';

//const socket = io("http://localhost:3001");

//enable .env
dotenv.config();

//connect to mongodb
mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
    console.log("Database connected");
});

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
//to access req.body
app.use(express.urlencoded({
    extended: true
}));

app.use("/", homepageRoute);
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversation", conversationRoute);

app.listen(3000, () => {
    console.log("Server is listening on port 3000.");
});