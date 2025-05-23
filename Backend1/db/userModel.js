const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Please provide an Email!"],
      unique: [true, "Email Exist"],
    },

    password: {
      type: String,
      required: [true, "Please provide a password!"],
      unique: false,
    },
    role: {
      type: String,
      required: [true, "Please select a role"],
      enum: ["Customer", "Business", "Admin"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
