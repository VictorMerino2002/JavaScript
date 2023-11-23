// 1. inicializar el canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const ROWS = 20;
const COLUMNS = 10;

const BLOCK_SIZE = 30;
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

canvas.width = BLOCK_SIZE * BOARD_WIDTH;
canvas.height = BLOCK_SIZE * BOARD_HEIGHT;

ctx.scale(BLOCK_SIZE,BLOCK_SIZE);

const COLORS = ["#222","red","blue","yellow","green","orange","purple"];

// 2. board
const board = Array.from({ length: ROWS}, ()=> Array(COLUMNS).fill(0));

// 3. pieza player

const piece = {
    position : { x: 4, y: 0},
    shape: [
        [1, 1],
        [1, 1]
    ]
}


// 4. game loop
let dropCounter = 0;
let lastTime = 0;

function update(time = 0){

    const deltaTime = time - lastTime;
    lastTime = time;

    dropCounter += deltaTime;

    if(dropCounter > 1000){
        piece.position.y++;
        dropCounter = 0;

        if(checkCollision()){
            piece.position.y--;
            solidifyPiece();
            removeRows();
        }
    }

    draw();
    window.requestAnimationFrame(update);
}


function draw(){
    ctx.fillStyle = COLORS[0];
    ctx.fillRect(0,0,canvas.width,canvas.height);

    board.forEach((row, y) =>{
        row.forEach((value, x) =>{
            if(value != 0){
                ctx.fillStyle = COLORS[value];
                ctx.fillRect(x,y,1,1);
            }
        });
    });

    piece.shape.forEach((row, y) =>{
        row.forEach((value, x) =>{
            if(value != 0){
                ctx.fillStyle = COLORS[value];
                ctx.fillRect(x + piece.position.x,y+piece.position.y,1,1);
            }
        });
    });
}

document.addEventListener("keydown", e =>{
    switch(e.key){
        case "ArrowLeft":
            piece.position.x--;
            if(checkCollision()){
                piece.position.x++;
            }
            break;
        case "ArrowRight":
            piece.position.x++;
            if(checkCollision()){
                piece.position.x--;
            }
            break;
        case "ArrowDown":
            piece.position.y++;
            if(checkCollision()){
                piece.position.y--;
                solidifyPiece();
                removeRows();
            }
            break;
    }
});

function checkCollision(){
   return piece.shape.find((row, y)=>{
    return row.find((value, x)=>{
        return (
            value != 0 &&
            board[y + piece.position.y]?.[x+ piece.position.x] !=0
        );
    });
   });
}

function solidifyPiece(){
    piece.shape.forEach((row, y) =>{
        row.forEach((value, x)=>{
            if(value !=0){
                board[y + piece.position.y][x + piece.position.x] = value;
            }
        })
    })
    piece.position.x = 4;
    piece.position.y = 0;
}

function removeRows(){
    const rowsToRemove = [];

    board.forEach((row, y)=>{
        if(row.every(value => value != 0)){
            rowsToRemove.push(y);
        }
    });

    rowsToRemove.forEach(y =>{
        board.splice(y, 1)
        const newRow = Array(BOARD_WIDTH).fill(0)
        board.unshift(newRow);
    })
}

update();

