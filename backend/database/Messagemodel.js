var mongoose = require('mongoose'); 

let messageSchema = new mongoose.Schema ({
    email: String,
    message: String
})

module.exports = mongoose.model('Message', messageSchema); 