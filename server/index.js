import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";
import dbConnection from "./dbConfig/index.js";
import path from "path";
// Security Packages
import helmet from "helmet";
import errorMiddleware from "./middleware/errorMiddleware.js";
import router from "./routes/index.js";

const __dirname = path.resolve(path.dirname(""));
// console.log(process.env);
dotenv.config();
const app = express();
app.use(express.static(path.join(__dirname, "views/build")));
const PORT = process.env.PORT || 8800;
dbConnection();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));
app.use(router);

//Error Middleware
app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
