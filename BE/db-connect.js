const mongoose = require("mongoose");

async function db() {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
}
db();