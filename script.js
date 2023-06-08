
function Militery(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('ses');

    if(hours >= 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }
document.getElementById('hrs').innerHTML = hours;
document.getElementById('mins').innerHTML = minutes;
document.getElementById('secs').innerHTML = seconds;
setInterval(Militery);
}

function displayHr(){
    var dateTime = new Date();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var session = document.getElementById('ses');

    if(hours >= 12){
        hours = hours - 12;
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }
document.getElementById('hrs').innerHTML = hours;
document.getElementById('mins').innerHTML = minutes;
document.getElementById('secs').innerHTML = seconds;
setInterval(displayHr);
}




