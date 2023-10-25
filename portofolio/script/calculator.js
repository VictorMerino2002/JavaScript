// const internetExplorer = new Ventana("Internet Explorer",1000,800,"img/explorer.png","");
const calculatorContent = `
<div class="calc-grid">
    <div id="calc-screen">0</div>
    <div class="btn operator">%</div>
    <div class="btn funct">CE</div>
    <div class="btn funct">C</div>
    <div class="btn funct">⇦</div>

    <div class="btn operator">⅟x</div>
    <div class="btn operator">x²</div>
    <div class="btn operator">²√x</div>
    <div class="btn operator">÷</div>

    <div class="btn number">7</div>
    <div class="btn number">8</div>
    <div class="btn number">9</div>
    <div class="btn operator">x</div>

    <div class="btn number">4</div>
    <div class="btn number">5</div>
    <div class="btn number">6</div>
    <div class="btn operator">-</div>

    <div class="btn number">1</div>
    <div class="btn number">2</div>
    <div class="btn number">3</div>
    <div class="btn operator">+</div>

    <div class="btn operator">+/-</div>
    <div class="btn number">0</div>
    <div class="btn number">.</div>
    <div class="btn funct">=</div>
</div>
`;
const calculadora = new Ventana("Calculadora",500,800,"img/calculator.png",calculatorContent);

const calcNumbers = document.getElementsByClassName("number");

const calcScreen = document.getElementById("calc-screen");

//Añadir valor a los botones de los numeros
for(let i=0;i<calcNumbers.length;i++){
    console.log(calcNumbers[i].innerHTML);
    calcNumbers[i].addEventListener("click",()=>{
        if(calcScreen.innerHTML=="0"){
            calcScreen.innerHTML = calcNumbers[i].innerHTML;
        }else{
            calcScreen.innerHTML = calcScreen.innerHTML + calcNumbers[i].innerHTML;
        }
        
    });
}

//Añadir valor a los operadores
const calcOperator = document.getElementsByClassName("operator");

//Modulo %
const calcModuleBtn = calcOperator[0];
calcModuleBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = calcScreen.innerHTML + calcModuleBtn.innerHTML;
});

//Inversa 1/x
const calcValorInversaBtn = calcOperator[1];
calcValorInversaBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = eval(1/calcScreen.innerHTML);
});

//Elevar a 2 x^2
const calcElevar2Btn = calcOperator[2];
calcElevar2Btn.addEventListener("click",()=>{
    calcScreen.innerHTML = eval(calcScreen.innerHTML*calcScreen.innerHTML);
});

//Raiz cuadrada √
const calcRaiz2Btn = calcOperator[3];
calcRaiz2Btn.addEventListener("click",()=>{
    calcScreen.innerHTML = eval(Math.sqrt(calcScreen.innerHTML));
});

//Dividir ÷
const calcDividirBtn = calcOperator[4];
calcDividirBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = calcScreen.innerHTML + "/";
});

//Multiplicar x
const calcMultiplicarBtn = calcOperator[5];
calcMultiplicarBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = calcScreen.innerHTML + "*";
});

//Restar -
const calcRestarBtn = calcOperator[6];
calcRestarBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = calcScreen.innerHTML + "-";
});

//Sumar +
const calcSumarBtn = calcOperator[7];
calcSumarBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = calcScreen.innerHTML + "+";
});

//Variar de positivo a negativo
const calcVariarBtn = calcOperator[8];
calcVariarBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = eval(calcScreen.innerHTML*-1);
});
//Añadir funciones a los botones de funciones
const calcFunct = document.getElementsByClassName("funct");
const calcCEBtn = calcFunct[0];
calcCEBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = "0";
});

const calcCBtn = calcFunct[1];
calcCBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = "0";
});

const calcEraseBtn = calcFunct[2];
calcEraseBtn.addEventListener("click",()=>{
    if(calcScreen.innerHTML.length==1){
        calcScreen.innerHTML = "0";
    }else{
        calcScreen.innerHTML = calcScreen.innerHTML.slice(0,-1);
    }    
});

const calcEqualsBtn = calcFunct[3];
calcEqualsBtn.addEventListener("click",()=>{
    calcScreen.innerHTML = eval(calcScreen.innerHTML);
});

// let operador = "+";
// let num1 = "5";
// let num2 = "7";

// let resultado = eval(num1.concat(operador).concat(num2));

// console.log(resultado);