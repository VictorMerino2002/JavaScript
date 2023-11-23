"use strict";

function addMsg(msg,owner){

    const chat = document.getElementById("chat");

    const divContainer = document.createElement("div");
    const textMsg = document.createElement("span");
    const hourMsg = document.createElement("i");
    const checkMsg = document.createElement("i");

    if(owner){
        divContainer.className = "my-msg-container";
        textMsg.className = "my-msg";
    }

    checkMsg.classList = "fa-solid fa-check";
    let actualDate = new Date();

    textMsg.innerHTML = msg;
    hourMsg.innerHTML =  `${actualDate.getHours().toString().padStart(2, "0")}:${actualDate.getMinutes().toString().padStart(2, "0")}`;

    hourMsg.appendChild(checkMsg);
    textMsg.appendChild(hourMsg);
    divContainer.appendChild(textMsg);

    chat.appendChild(divContainer);
}

const btnSendMsg = document.getElementById("btn-send-msg");
const msgInput = document.getElementById("msg-input");

if(navigator.serviceWorker){
    navigator.serviceWorker.register("serviceWorker.js");
}

navigator.serviceWorker.addEventListener("message",(msg)=>{
    addMsg(msg.data,false);
})

btnSendMsg.addEventListener("click",()=>{
    navigator.serviceWorker.ready.then(res=> res.active.postMessage(msgInput.value));
    addMsg(msgInput.value,true);
    msgInput.value = "";
});

