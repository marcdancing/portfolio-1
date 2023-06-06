var mongoose = require('mongoose'); 

class database{

    constructor(){
        mongoose.set('strictQuery', false); 
        this.conectar().catch(err => console.log("Error: "+err)); 
        this.MessageModel = require('../database/Messagemodel'); 

    }

    async conectar(){
        try{
            await mongoose.connect('mongodb://127.0.0.1:27017/messages')
            console
        }
        catch(err){
            throw new err("Impossible to connect to the database"); 
        }
    }

    async addMessage(postEmail, postMessage){
        await this.MessageModel.collection.insertOne({email: postEmail, message: postMessage}); 
    }
}