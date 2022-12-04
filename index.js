function register(){
console.log("Yessss");

var RegName = document.getElementById("RegName").value;
var RegNum = document.getElementById("RegNum").value;
var RegOTP = document.getElementById("RegOTP").value;
var RegHouse = document.getElementById("RegHouse").value;
var RegArea = document.getElementById("RegArea").value;
var RegState = document.getElementById("RegState").value;
var RegPin = document.getElementById("RegPin").value;

localStorage.setItem("RegName", RegName.value);
localStorage.setItem("RegNum", RegNum.value);
localStorage.setItem("RegOTP", RegOTP.value);
localStorage.setItem("RegHouse", RegHouse.value);
localStorage.setItem("RegArea", RegArea.value);
localStorage.setItem("RegState", RegState.value);
localStorage.setItem("RegPin", RegPin.value);
console.log(RegName);



// location.href = "donation.html";
}

function login(){
    location.href = "donation.html";
   
    }


function details(){
    console.log("BOOM");
    var RegName =  localStorage.getItem("RegName");
    var RegNum =localStorage.getItem("RegNum");
    var RegOTP =localStorage.getItem("RegOTP");
    var RegHouse =localStorage.getItem("RegHouse" );
    var RegArea =localStorage.getItem("RegArea");
    var RegState =localStorage.getItem("RegState" );
    var RegPin =localStorage.getItem("RegPin");
    console.log(RegName);
    console.log(RegNum);


}

