"use strict";

const operationContainer = document.getElementById("operation-container");

function addOperation(n1,n2,op){
    console.log(op);
    const operation = document.createDocumentFragment();
    const divContainer = document.createElement("div");
    const span = document.createElement("span");
    const input = document.createElement("input");

    divContainer.className = "operation";
    span.className = "op-content";
    input.className = "input-result";
    let calc = n1 + " " + op + " "+ n2 + " =";
    span.innerHTML = calc;
    divContainer.appendChild(span);
    divContainer.appendChild(input);
    
    operation.appendChild(divContainer);
    operationContainer.appendChild(operation);
}

const operationsArray = document.getElementsByClassName("op-content");
const inputResultArray = document.getElementsByClassName("input-result");

function checkResults(){
    let fails = 0;
    for(let i=0;i<operationsArray.length;i++){
        let op = operationsArray[i].innerHTML;
        op = op.slice(0,-1);
        operationsArray[i].innerHTML =operationsArray[i].innerHTML + " " + eval(operationsArray[i].innerHTML.slice(0,-1)).toFixed(2);
        let result = document.createElement("b");
        if(inputResultArray[i].value == ""){
            fails++;
            result.innerHTML = "❌";
        }else if(eval(op) == inputResultArray[i].value){
            result.innerHTML = "✅";
        }else{
            fails++;
            result.innerHTML = "❌";
        }
        operationsArray[i].appendChild(result);
    }
    return fails;
}


const btnCheckResults = document.getElementById("btn-check-results");

btnCheckResults.addEventListener("click",()=>{
    const failsDiv = document.getElementById("fails");
    const correctDiv = document.getElementById("correct");
    let fails = checkResults();

    failsDiv.innerHTML = fails;

    correctDiv.innerHTML = operationsArray.length - fails; 
});

const btnCreateOp = document.getElementById("btn-create-op");
const inputRangeOp = document.getElementById("input-range-op");

btnCreateOp.addEventListener("click",()=>{

    const sumCheckbox = document.getElementById("sum-checkbox");
    const minusCheckbox = document.getElementById("minus-checkbox");
    const multiplicationCheckbox = document.getElementById("multiplication-checkbox");
    const divisionCheckbox = document.getElementById("division-checkbox");

    let op = [];
    let opCount = 0;

    if(!sumCheckbox.checked && !minusCheckbox.checked && !multiplicationCheckbox.checked && !divisionCheckbox.checked){
        op.push("+");
        op.push("-");
        op.push("*");
        op.push("/");
        opCount = 4;
    }

    if(sumCheckbox.checked){
        op.push("+");
        opCount++;
    }

    if(minusCheckbox.checked){
        op.push("-");
        opCount++;
    }

    if(multiplicationCheckbox.checked){
        op.push("*");
        opCount++;
    }

    if(divisionCheckbox.checked){
        op.push("/");
        opCount++;
    }



    for(let i=0;i<inputRangeOp.value;i++){

        
        let randorOperator = Math.floor(Math.random()*opCount);


        let randomNumber1,randomNumber2;
        if(randorOperator == 2){
            randomNumber1 = Math.floor(Math.random()*9)+1;
            randomNumber2 = Math.floor(Math.random()*9)+1;
        }else if(randorOperator == 3){
            randomNumber1 = Math.floor(Math.random()*99)+1;
            randomNumber2 = Math.floor(Math.random()*9)+1;
        }else{
            randomNumber1 = Math.floor(Math.random()*99);
            randomNumber2 = Math.floor(Math.random()*99);
        }
    
        addOperation(randomNumber1,randomNumber2,op[randorOperator]);
    }

});