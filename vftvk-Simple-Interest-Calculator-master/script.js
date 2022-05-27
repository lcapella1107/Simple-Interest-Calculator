function checkData()
// Check if the user used a negative number or 0
{
    var principal = document.getElementById("principal")
    if(principal.value<=0){
        alert('Enter a positive Number')
        principal.focus(principal);
        return false;
    }
    if(isNaN(principal)){
        alert('Enter a positive Number')
        principal.focus(principal);
        return false;
    }
    return true;
}
function compute()
// Function returns the results of the data after user completes the fields
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var results = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("results").innerHTML="\<br\>\<br\>If you deposit <mark>"+principal+"</mark>\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+results+"</mark>\<br\>In the year <mark>"+year+"</mark>\<br\>"
}

function updateRate()
// Function updates the nunmber on the range bar
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
   
}
