function go() {
    //Create a Request Object
    var xmlhttp = new XMLHttpRequest();
    
    var user = document.getElementById("entered").value;
    
    //Div to display message
    var message = document.getElementById("msg");

    //When the request is sent and a response is recieved blah
    xmlhttp.onreadystatechange = function () {
        message.innerHTML = xmlhttp.responseText;
    };

    //Open and Send are how you send a request
    xmlhttp.open("GET", "http://yoface-jki127.rhcloud.com/AJAX2/main.php?name=" + user, true);
    xmlhttp.send();
}