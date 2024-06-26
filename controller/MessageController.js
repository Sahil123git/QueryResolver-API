const PublicMessage = require("../models/PublicMessages");

exports.getAllMessages = async (req, res) => {
  try {
    const messages = await PublicMessage.find();
    return res.status(200).json({ data: messages });
  } catch (ex) {
    console.log("in error");
    return res.status(400).json({ data: "Hello World!" });
  }
};

exports.postMessage = async (req, res) => {
  try {
    return res.status(200).json({ data: "Add New Message!" });
  } catch (ex) {
    console.log("in error");
    return res.status(400).json({ data: "Hello World!" });
  }
};

exports.getAllOnlineUsers = async (req, res) => {
  try {
    return res.status(200).json({ data: "Add New Message!" });
  } catch (ex) {
    console.log("in error");
    return res.status(400).json({ data: "Hello World!" });
  }
};
