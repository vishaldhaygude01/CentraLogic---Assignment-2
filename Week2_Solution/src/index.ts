import express from "express";
import bodyParser from "body-parser";
import { orderRoutes } from "./routes/orderRoutes";
import { arrayRoutes } from "./routes/arrayRoutes";
import { connectDb } from "./utils/db";

const app = express();
const port = 3000;


app.use(bodyParser.json());


connectDb();

app.use("/api/orders", orderRoutes);
app.use("/api/array-operations", arrayRoutes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
