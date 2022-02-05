const router = require("express").Router();
const conversationController = require("../controller/conversation");

//create new conversation
router.post("/", conversationController.createConversation);

//get user conversations
router.get("/:userId", conversationController.getUserConversations);

module.exports = router;