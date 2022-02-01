function startgame(){
    for (var i=1; i<=9; i=i+1)
    {
        clearbox(i);
    }
    document.turn = "x";
    if(math.random()<0.5)
    {
        document.turn = "o"
    }
    document.winner = null;
    setMessage(document.turn + "gets to start.");
    document.getElementById("s1").style.color = "white";
    document.getElementById("s2").style.color = "white";
    document.getElementById("s3").style.color = "white";
    document.getElementById("s4").style.color = "white";
    document.getElementById("s5").style.color = "white";
    document.getElementById("s6").style.color = "white";
    document.getElementById("s7").style.color = "white";
    document.getElementById("s8").style.color = "white";
    document.getElementById("s9").style.color = "white";

}
function setMessage(msg){
    document.getElementById("message").textContent = msg;
}
function nextmove(square)
{
    if(document.winner !=null){
        setMessage(document.winner + "already won the game");
    }
    else if (square.textContent == "")
    {
        square.textContent = document.turn;
        switchTurn();
    }
    else{
        setMessage("that square is already used");
    }
}
function switchTurn()
{  if (checkForWinner(document.turn)) {
    setMessage("congratulations" + document.turn + " !  you win");
    document.winner=document.turn;

}
else if (checkforTie()){
setMessage("it's a tie..!! play again..!!");
}
else if ( document.turn=="X";)
else {
   document.turn="0";
   setMessage("it's"+ document.turn +"'s turn!");

} 
 
else {   document.turn="X";
   setMessage("it's"+ document.turn +"'s turn!");

} 
}
function checkForWinner(move){
    var result = false;
   if(checkRow(1,2,3,move) || checkRow(4,5,6,move)|| checkRow(7,8,9,move)
   || checkRow(1,4,7,move)|| checkRow(2,5,8,move) checkRow(3,6,9,move)||
    checkRow(1,5,9,move)||checkRow(3,5,7,move))
    {
        result = true;
    }
    return result;
}
function checkRow(a,b,c,move){
    var result = false;
    if(getBox(a)==move && getBox(b)==move && getBox(c)==move)
    {
        result = true;
    } return result;
}
   function getBox(number)
   {
       return document.getElementById("s"+ number).textContent;

   }
   function clearbox(number){
       document.getElementById("s"+number).textContent = "";

   }
   function clearforTie()
   {
       for(var i=1;i<10;i++)
       {
           if(getBox(i)=="")
           return false;
       } return true;
   }