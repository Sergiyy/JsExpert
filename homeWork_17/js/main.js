'use strict'
const btn = document.getElementById("play");
function transform() {
    
    data.splice(5, 1);
    var newArr = [];
    data.forEach(function(item, index){
        newArr.push({
            url: item.url,
            name: item.name,
            params: item.params,
            isVisible: item.params.status,
            description: item.description,
            date: item.date
        })
    })

    //первый вариант
    let newDate = function(date){
        return moment(date).format('YYYY/MM/DD HH:mm:ss a');
    };

    // второй вариант
    /*  var newDate = function(date){
        var tmpDate = new Date(date); 
        return  tmpDate.getFullYear() + "/" +
                tmpDate.getMonth() + "/" +
                tmpDate.getDate() + " " +
                tmpDate.getHours() + ":" +
                tmpDate.getMinutes();
    }; */

        newArr.map(function(newArr)  {
        newArr.name = newArr.name.substring(0,1) + newArr.name.substring(1).toLowerCase();
        newArr.url = "http://" + newArr.url;
        newArr.description = newArr.description.substring(0,15) + "...";
        newArr.date = newDate(newArr.date);
        newArr.params = newArr.params.status +"=>"+ newArr.params.progress;
    }); 
    
    let result = newArr.filter(newArr => newArr.isVisible == true);
    
    printResult(result);

    function printResult(Arr){
        for (let key in Arr) {
            console.log(Arr[key]); 
        }
    }
}

btn.addEventListener("click", transform);