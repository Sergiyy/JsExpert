var total = 0;
var enter = document.getElementById("result");
for( i = 1; i <= 15; i++){
    var first = Math.floor((Math.random() * 6) + 1);
    var second = Math.floor((Math.random() * 6) + 1);
    enter.innerHTML +=  "Первая кость: " + first + " " + "Вторая кость: " + second + '<br>';
    if(i == 8 || i == 13){
        continue;
    }
    if(first === second){
        enter.innerHTML += "Выпал дубль. Число: " + first + '<br>';
    }
    if((first < 3 && second > 4) || (second < 3 && first > 4) ){
        enter.innerHTML += "Большой разброс между костями. Разница составляет: " + Math.abs(second-first) + '<br>';    
    }
    total += first + second;
}
total > 100 ? enter.innerHTML += "Победа, вы набрали очков: "+ total + '<br>' : enter.innerHTML += "Вы проиграли, у вас очков: "+ total + '<br>';
   