class Calculator {
    constructor(windowElement,taskElement){
        this.windowElement = windowElement;
        this.taskElement = taskElement;
    }
    minimizeWindow(){
        this.windowElement.style.display = "none";
    }
    maximizeWindow(){
        if(this.windowElement.style.height=="99vh"){
            this.windowElement.style.height = "800px";
            this.windowElement.style.width = "1300px";
            this.windowElement.style.top = "7%";
            this.windowElement.style.left = "25%";
        }
        else{
            this.windowElement.style.height = "99vh";
            this.windowElement.style.width = "99.60%";
            this.windowElement.style.top = "0";
            this.windowElement.style.left = "0";
        }
    }
    openWindow(){
        this.windowElement.style.display = "flex";
        this.taskElement.style.display = "flex";
    }
    closeWindow(){
        this.windowElement.style.display = "none";
        this.taskElement.style.display = "none";
    }
}

let calculatorElement = document.getElementById("calc-container");
let calculatorTaskElement = document.getElementById("calc-task");

const calculator = new Calculator(calculatorElement,calculatorTaskElement);

document.addEventListener("DOMContentLoaded", function() {
    let closeButton = document.getElementById("minimize-calc");
    closeButton.addEventListener("click", function() {
        myComputer.minimizeWindow();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let closeButton = document.getElementById("maximize-calc");
    closeButton.addEventListener("click", function() {
        myComputer.maximizeWindow();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    let closeButton = document.getElementById("close-calc");
    closeButton.addEventListener("click", function() {
        myComputer.closeWindow();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    myComputerTaskElement.addEventListener("click", function() {
        myComputer.openWindow();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let calculatorDesktopIcon = document.getElementById("calculator-desktop");
    calculatorDesktopIcon.addEventListener("click", function() {
        calculator.openWindow();
    });
});