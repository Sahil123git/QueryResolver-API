const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  socketId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const PublicMessage = mongoose.model("Message chat", messageSchema);
module.exports = PublicMessage;
