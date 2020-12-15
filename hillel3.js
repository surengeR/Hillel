var years = +prompt('Сколько вам лет?', 100);
var LastNumber=years%10;
if (years>=2 && years<5){
    alert('Вам ' + years + ' года!');
}
else if (years>20){
    
    if (LastNumber>=2&&LastNumber<5){
        alert('Вам ' + years + ' года!');
    }
    if (LastNumber===1){
        alert('Вам ' + years + ' лет!');
    }
   
}
if(years===1){
    alert('Вам ' + years + ' год!');
}
if(LastNumber===0||LastNumber>=5&&LastNumber<=9||years>10&&years<15) 
{
        alert('Вам ' + years + ' лет!');

}





