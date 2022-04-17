require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./routes/userRoute");
app.use(express.json());
app.use(cors());

//ROUTES
app.use("/users", userRouter);

//CONNECT TO MONGODB
const URI = process.env.MONGO_URL;
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if(err) throw err;
    console.log("Connect to mongo db success");
})


//listen to server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server is running");
})