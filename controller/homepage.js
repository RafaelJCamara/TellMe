const path = require('path');

module.exports.getHomepage = async (req, res) =>{
    res.sendFile(path.join(__dirname+'/../ui/index.html'));
}