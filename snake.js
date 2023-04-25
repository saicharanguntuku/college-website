//board
var blocksize=25;
var rows=20;
var cols=20;
var board;
var context;

//snake head
var snakeX=blocksize*5;
var snakeY=blocksize*5;
var speedX=0;
var speedY=0;
var snakebody=[];

//food
var foodX;
var foodY;

//endofgame
var gameover=false;

window.onload=function(){
    board=document.getElementById('board')
    board.height=rows*blocksize;
    board.width=cols*blocksize;
    context=board.getContext('2d');//used for drawin on board
    placeFood();
    document.addEventListener('keyup',changeDirection)
    //update();
    setInterval(update,1000/10);
}
function update(){
    if(gameover)
    {
        return;
    }
    context.fillStyle="black";
    context.fillRect(0,0,board.width,board.height);

    context.fillStyle="red";
    context.fillRect(foodX,foodY,blocksize,blocksize);

    if(snakeX==foodX && snakeY==foodY)
    {
        snakebody.push([foodX,foodY])
        placeFood();
    }
    for(let i=snakebody.length-1;i>0;i--)
    {
      snakebody[i]=snakebody[i-1];  
    }
    if(snakebody.length)
    {
        snakebody[0]=[snakeX,snakeY];
    }

    context.fillStyle="lime";
    snakeX+=speedX*blocksize;
    snakeY+=speedY*blocksize;
    context.fillRect(snakeX,snakeY,blocksize,blocksize);
    for(let i=0;i<snakebody.length;i++)
    {
        context.fillRect(snakebody[i][0],snakebody[i][1],blocksize,blocksize);
    }
    //gameover conditions
    if(snakeX<0 || snakeX>cols*blocksize || snakeY<0 || snakeY>rows*blocksize)
    {
        gameover=true;
        alert('Game Over');
    }
    for(let i=0;i<snakebody.length;i++)
    {
        if(snakeX==snakebody[i][0] && snakeY==snakebody[i][1])
        {
            gameover=true;
            alert('Game Over');
        }
    }
}
function changeDirection(e)
{
    if(e.code=='ArrowUp' && speedY !=1)
    {
        speedX=0;
        speedY=-1;
    }
    else if(e.code=='ArrowDown' && speedY !=-1)
    {
        speedX=0;
        speedY=1;
    }
    else if(e.code=='ArrowLeft' && speedX !=1)
    {
        speedX=-1;
        speedY=0;
    }
    else if(e.code=='ArrowRight' && speedX !=-1)
    {
        speedX=1;
        speedY=0;
    }
}
function placeFood()
{
    foodX=Math.floor(Math.random()*cols)*blocksize;
    foodY=Math.floor(Math.random()*rows)*blocksize;
}