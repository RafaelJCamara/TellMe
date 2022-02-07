const io = require("socket.io-client");
const Conversation = require("../models/Conversation");

module.exports.createConversation = async (req, res) =>{
    try{
        const {senderId , receiverId, message} = req.body;
        const newConversation = new Conversation({
            members: [senderId, receiverId],
            message
        });
        const savedConversation = await newConversation.save();
        return res.status(200).json(savedConversation);
    }catch(err){
        return res.status(500).json(err);
    }
}

module.exports.getUserConversations = async (req, res) =>{
    try{
        const {userId} = req.params;
        const conversations = await Conversation.find({
            members: {
                $in: [userId]
            }
        });
        //render conversation information
        const socket = io("http://localhost:3001");
        socket.on("connect", ()=>{
            console.log("You connected.");
        });
        return res.status(200).json(conversations);
    }catch(err){
        return res.status(500).json(err);
    }
}