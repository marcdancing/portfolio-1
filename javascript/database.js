class Database{
    constructor( email, message){
        this.email = email; 
        this.message = message; 
    }

    storeInfo( email, message){
        // fetch(`/save?email=${email}&message=${message}`); 

        console.log('Data sended succesfully!'); 
        console.log(email)
        console.log(message)
    }
}

export {Database as Database}; 