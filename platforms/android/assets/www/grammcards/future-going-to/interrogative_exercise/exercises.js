function saludar () {
    alert("welcome to exercise 1");
}

function verifiexercise1(){
    var partes = document.getElementsByName("exercise-1");
    if(
        partes[0].value=="when" &&
        partes[1].value=="are" &&
        partes[2].value=="you" &&
        partes[3].value=="going to" &&
        partes[4].value=="do" &&
        partes[5].value=="the homework" &&
        partes[6].value=="?"
    ){
        alert("congratulations, you got it!"); 
    }else{
        alert("sorry, try again.^_^");
    }
}