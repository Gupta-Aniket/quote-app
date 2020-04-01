//var a= document.getElementById("toChange");
function change(){
var a= document.getElementById("toChange");
a.innerHTML="this will change";
}

function get_quote_of_the_day() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
	 if (this.readyState == 4 && this.status == 200) {
	     // Access the result here
	     alert(this.responseText);
	 }
    };
    xhttp.open("GET", "https://quotes.rest/qod?category=inspire", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
    xhttp.send();
}

get_quote_of_the_day()