const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const productRouter = require("./Products/controller");
const userRouter = require("./Users/UserController");

main().catch((err) => console.log(err));

app.use(express.json());
app.use("/api/products", productRouter);
app.use("/api/users", userRouter)


async function main() {
  await mongoose.connect("mongodb://localhost:27017/eCommerce");
}
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(4000, () => {
  console.log("asdaasdasdasdasdad");
});

