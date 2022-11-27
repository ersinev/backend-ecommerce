const mongoose = require("mongoose");
const { Schema } = mongoose;
const user = new Schema({
  name: String,
  password: String,
  email: String,
});

const UserModel = mongoose.model("users", user);
exports.UserModel = UserModel;
