
 function countdow(){
    let date = new Date;
    document.getElementById('day').innerHTML= date.getDate();
    document.getElementById('month').innerHTML= date.getMonth();
    document.getElementById('year').innerHTML= date.getFullYear();
    document.getElementById('hour').innerHTML= date.getHours();
    document.getElementById('minute').innerHTML= date.getMinutes();
    document.getElementById('second').innerHTML= date.getSeconds();
 }
 setInterval(countdow,1000);  