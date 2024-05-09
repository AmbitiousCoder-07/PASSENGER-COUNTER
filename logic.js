let countVar = document.getElementById("count"); 
let display = document.getElementsByClassName("passengerCountDisplay"); 
let count = 0; 

function increment()
{
    count++; 
    countVar.textContent = count; 
}

function saveUpdate()
{
    display[0].textContent += " " + count + " -"; 
    count = 0; 
    countVar.textContent = count; 
}