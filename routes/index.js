const express = require("express");
const router = express.Router();
const MessageController = require("../controller/MessageController");

router.get("/allUsers", MessageController.getAllOnlineUsers);
router.get("/allPublicMessage", MessageController.getAllMessages);
router.post("/message", MessageController.postMessage);
module.exports = router;
