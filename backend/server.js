import express from "express";
//import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";

import path from "path";

//dotenv.config();

const PORT = process.env.PORT || 5000;
const mongodbUrl = "mongodb+srv://admin:passwordadmin@cluster0.5vqng.mongodb.net/test?retryWrites=true&w=majority";

mongoose
    .connect(mongodbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .catch(error => console.log(error.reason));

const app = express();
if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
}
app.use(express.json())
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

// Serve static assests if in production
if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"/frontend/build")))
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
    })
}


app.listen(PORT, () =>
    console.log(
        "************************************************** \n The Server has started at : http://localhost:5000"
    )
);
