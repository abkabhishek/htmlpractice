

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function showBalance() {
    var name= document.getElementById("account").value;
    var balance = document.getElementById("balance").value;
    window.alert("Account Info:\n Account:"+name+"\n Balance: $"+balance);
}


function showItem() {
    var name= document.getElementById("title").value;
    var balance = document.getElementById("expected").value;
    window.alert("Budget Item:\n Title:"+name+"\n Expected: $"+balance);
}