const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {type: String,default:null},
    email: {type: String,lowercase: true,default:null},
    idEmail: {type: Number,default:null },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

module.exports = User;