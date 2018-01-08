var btn = document.getElementById("play");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");
var player = document.getElementById("result");
function getPlayerResult() {
    return Math.floor((Math.random() * 3) + 1);
}
function runGame() {
    var number1 =  getPlayerResult();
    var number2 =  getPlayerResult();
    var result =  determineWinner(number1, number2);
    player1.innerHTML = getNameById(number1);
    player2.innerHTML = getNameById(number2);
    player.innerHTML = printResult(result);
}
function getNameById(number){
   if (number == 1){
        return number = "камень" ;
   }    
   else if(number == 2){
        return number = "ножницы";
   }
   else if(number == 3){
        return number = "бумага";
   }
}
function determineWinner(number1, number2){
      if (number1 == number2){
        return result = 0;  
     }
     else if ((number1 == 1) && (number2 == 2)|| (number1 == 2) && (number2 == 3) || (number1 == 3) && (number2 == 1)){
        return result = 1; 
     }
     else if ((number1 == 2) && (number2 == 1)|| (number1 == 3) && (number2 == 2) || (number1 == 1) && (number2 == 3)){
        return result = 2;
     }
      
}
function printResult(result){
    if (result == 0){
        return result = "Победила дружба"; 
    }
    else if(result == 1){
        return result = "Победил первый игрок"; 
    }
    else if(result == 2){
        return result = "Победил второй игрок" ; 
    }
}
btn.addEventListener("click", runGame);