const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, default: "" }, 
    password: { type: String, required: true },
    phoneNumber: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", UserSchema);
