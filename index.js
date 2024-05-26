const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 8000;

mongoose.connect("mongodb://localhost:27017/UroVision6")
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.error("Database connection error:", error));

const db = mongoose.connection;
db.on("error", (error) => console.error(error));

app.use(cors());
app.use(express.json());

const symptomsRouter = require("./routes/symptoms");
app.use("/api/symptoms", symptomsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
