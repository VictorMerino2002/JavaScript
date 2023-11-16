const btnDarkMode = document.getElementById("btn-darkmode");

btnDarkMode.addEventListener("click",()=>{
    document.body.classList.toggle('darkmode');
    if(document.body.className == "darkmode"){
        btnDarkMode.innerHTML = "🌔";
        btnDarkMode.style.background = "#111";
    }else{
        btnDarkMode.innerHTML = "🌒";
        btnDarkMode.style.background = "#fff";
    }
})