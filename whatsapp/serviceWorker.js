self.addEventListener("message",msg=>{
    msg.source.postMessage(msg.data);
})