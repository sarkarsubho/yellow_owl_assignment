import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

app.use(
  cors({
    credentials: true,
  })
);
app.use(compression());
app.use(cookieParser()); //no use case here if we have login cookie then we can use
app.use(bodyParser.json());

const server = http.createServer(app);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());

app.get("/api/v1", (req: express.Request, res: express.Response) => {
  res.status(200).send("welcome to the yellow owl server.");
});

server.listen(process.env.PORT || 3000, () => {
  console.log("server is running on port 8080");
});
