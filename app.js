const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 5009;
const mongoString = process.env.MONGODB_URI;
const mongoose = require("mongoose");
const http = require("http");
const app = express();
const server = http.createServer(app);
const routes = require("./routes");
const { rootSocket } = require("./socket");

mongoose.set("strictQuery", true);
mongoose
  .connect(mongoString)
  .then(() => {
    console.log("MongoDB connected");
    server.listen(PORT, () => {
      rootSocket(server);
      console.log(`Server Started at localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json({ limit: "150mb" }));
app.use(express.urlencoded({ limit: "150mb", extended: true }));
app.use("/", routes);
