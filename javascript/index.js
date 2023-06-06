import { Database } from "./database.js";

window.onload = () => {
    document.getElementById("btn-send").addEventListener("click", sendData); 
}



let bd = new Database(); 

function sendData () {
    let email = document.getElementById("email").value;   
    let message = document.getElementById("message").value;  

    if(email === "" && message === ""){
        alert("You can not send empty fields"); 
    }else{
        bd.storeInfo(email, message); 
    }

}