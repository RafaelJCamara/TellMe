const Conversation = require("../models/Conversation");

module.exports.createConversation = async (req, res) =>{
    try{
        const {senderId , receiverId} = req.body;
        const newConversation = new Conversation({
            members: [senderId, receiverId]
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
        return res.status(200).json(conversations);
    }catch(err){
        return res.status(500).json(err);
    }
}