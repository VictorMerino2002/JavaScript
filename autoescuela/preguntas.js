const mainContainer = document.getElementById("main-container");

function createQuestion(question,index){

    const questionContainer = document.createElement("div");
    const questionNumber = document.createElement("h2");
    const questionText = document.createElement("span");

    questionNumber.id = `question-${index}`;
    questionContainer.className = "question-container";
    questionNumber.innerHTML = `Pregunta ${index+1}`;
    questionText.innerHTML = question.pregunta;

    questionContainer.appendChild(questionNumber);
    questionContainer.appendChild(questionText);

    question.opciones.forEach( (opcion,j) =>{
        const opcionContainer = document.createElement("div");
        const opcionInput = document.createElement("input");
        const opcionLabel = document.createElement("label");

        opcionContainer.className = `opcions-${index}`;
        opcionInput.type = "radio";
        opcionInput.name = `opcion-${index}`;
        opcionInput.value = j;
        opcionLabel.innerHTML = opcion;

        opcionContainer.appendChild(opcionInput);
        opcionContainer.appendChild(opcionLabel);

        questionContainer.appendChild(opcionContainer);
    });
    mainContainer.appendChild(questionContainer);
}

const questionObjArray = [];

async function getQuestion(){
    
    fetch('preguntas.json')
    .then(response => response.json())
    .then(preguntasJSON => {
    // Utiliza un bucle forEach para acceder a cada objeto en el JSON
    preguntasJSON.forEach((pregunta, index)=> {
      questionObjArray.push(pregunta);
      createQuestion(pregunta,index);
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

function checkAnswers(){
    let count = 0;
    for(let i=0;i<questionObjArray.length;i++){
        const questionsArray = document.getElementsByName(`opcion-${i}`);
        const optionDiv = document.getElementsByClassName(`opcions-${i}`);
        const opcionCorrecta = document.querySelector(`input[type='radio'][name='opcion-${i}'][value='${questionObjArray[i].respuesta_correcta}'`)

        for(let j=0;j<4;j++){
                if(questionsArray[j].value == questionObjArray[i].respuesta_correcta && questionsArray[j].checked){
                    optionDiv[j].style.background = "green";
                    optionDiv[j].style.color = "#fff";
                    count++;
                }else if(!opcionCorrecta.checked){
                    optionDiv[j].style.background = "red";
                    optionDiv[j].style.color = "#fff"; 
                    opcionCorrecta.parentNode.style.background = "green";
                }
        }
    }

    const failsCont = document.getElementById("fails-count");
    failsCont.innerHTML =`Fallos: ${questionObjArray.length-count}`;
    console.log(count);
}

getQuestion();

document.getElementById("btn-check").addEventListener("click",()=>{
    checkAnswers();
})