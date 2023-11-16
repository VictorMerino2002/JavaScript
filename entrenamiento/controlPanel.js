
//Range Input

const inputNumberOp = document.getElementById("input-number-op");

inputNumberOp.value = inputRangeOp.value;

inputNumberOp.addEventListener("input",()=>{
    inputRangeOp.value = inputNumberOp.value;
});

inputRangeOp.addEventListener("input",()=>{
    inputNumberOp.value = inputRangeOp.value;
});

//Timer

function startTimer() {
    const timerSpan = document.getElementById("timer-span");
    let seg = 0;
    let min = 0;

    // Almacena el ID del intervalo
    let intervalID = setInterval(() => {
        seg = (seg + 1) % 60;
        if (seg === 0) {
            min = (min + 1) % 60;
        }

        const segPrint = seg.toString().padStart(2, '0');
        const minPrint = min.toString().padStart(2, '0');

        timerSpan.innerHTML = `${minPrint}:${segPrint}`;
    }, 1000);

    // Agrega un evento de clic al botón de detener
    const btnStopTimer = document.getElementById("btn-timer-stop");
    btnStopTimer.addEventListener("click", () => {
        // Detiene el intervalo usando el ID almacenado
        clearInterval(intervalID);
    });

    const btnResetTimer = document.getElementById("btn-timer-reset");
    btnResetTimer.addEventListener("click",()=>{
        seg = 0;
        min = 0;
        timerSpan.innerHTML = "00:00";
        clearInterval(intervalID);
    })
}

const btnStartTimer = document.getElementById("btn-timer-start");


btnStartTimer.addEventListener("click",()=>{
    startTimer();
});