//This is created by Sujal Shrestha , 2024/04/02
//Creating a function 
function fun310(){
    //Taking the value of amount in usd from the html form and storing it in variable usd_amount310    
    var usd_amount310 = document.getElementById("number").value;
    //Validating the input: if user enters any number or any negative values the error messege is displayed
    if (isNaN(usd_amount310) || usd_amount310 <=0  ){
        window.alert("Please enter the valid positive usd amount to be converted to cad!!");
    }
    else{
        var cad_amount310= 1.35 * usd_amount310;
        document.getElementById("number1").value= cad_amount310.toFixed(3); //toFixed(3) displays only 3 digits after decimal
    }
    }
    
    //Creating a function for the clock
    function clock310(){
    //Calling a Date object     
    const d310 = new Date();
    //Initializing variables to store hours, minutes, and second.
    var hours310= d310.getHours(); //gives the current hours
    var minutes310= d310.getMinutes(); //gives the current minutes
    var second310= d310.getSeconds(); //gives the current seconds
    //Printing the time using innerHTML property
    document.getElementById("time").innerHTML="The time is "+hours310+ ":"+minutes310+":"+second310;
    }
    
    //setInterval executes and calls a function within certain millisecond executed
    setInterval(clock310(), 1000);