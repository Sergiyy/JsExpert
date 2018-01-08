var total = 0;
var result = "";
(function run(){
    /* 1. Создать главную самозапускающуюся функцию run() в которой будет выполняться основной код (цикл)
    Также эта функция должна содержать в себе вызовы всех остальных функций. */
    // var enter = document.getElementById("result");
    for( i = 1; i <= 15; i++){
        var first = getRndNumber();
        var second =  getRndNumber();
        result += "Первая кость: " + first + " " + "Вторая кость: " + second + '<br>';
        isNumbersEqual(first,second);
        isBigDifference(first,second);
        total += first + second;
       /*    if(i == 8 || i == 13){
            continue;
        }  */
    }
    var theTotalResult = totalResult(total);
    printResult(result);
}());
    function getRndNumber(){
        return Math.floor((Math.random() * 6) + 1);

    }
    function setResult(string){
    /*  3.Сделать одну функцию которая будет склеивать все строки в одну (setResult). 
        Она должна принимать только один аргумент. Строку текста, которую надо склеить.*/
        return result += string ;
    }
    /* console.log(setResult(result)); */
    function isNumbersEqual(first,second){
        /* 4. Сделать функцию для определения совпадений. (isNumbersEqual).
               Она должна содержать в себе проверку на совпадение и внутри себя
               вызывать функцию для сохранения данных в общую строку (setResult). */
        if(first == second){
            return  setResult("Выпал дубль. Число: "+ first + '<br>');
        }
    }
    function isBigDifference(first,second){
    /*  5. Сделать функцию для определения разницы. (isBigDifference). 
        Она должна содержать в себе соответствующую проверку и внутри себя вызывать
        функцию для сохранения данных в общую строку (setResult). */
        if((first < 3 && second > 4) || (second < 3 && first > 4) ){
            return  setResult("Большой разброс между костями. Разница составляет: " + Math.abs(second-first) + '<br>');    
        }
    }
    function totalResult(total){
        /* 6. Сделать функцию для вычисления результата total.
        Функция должна вычислять результат сохранять его в переменную total. */
        return  total > 100 ? setResult("Победа, вы набрали очков: " + total + '<br>') 
        :  setResult("Вы проиграли, у вас очков: " + total + '<br>');
    }
    function printResult(first,second){
        /* 7. Сделать функцию, которая напечатает полученные 
        с помощью функции setResult данные в HTML (printResult). */
        /* result.innerHTML = document.getElementById("result"); */ 
        var element = document.getElementById("result"); 
        element.innerHTML = result;
    }
