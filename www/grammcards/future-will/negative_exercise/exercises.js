function saludar () {
    alert("welcome to exercise 1");
}

function verifiExercise1(){
    var partes = document.getElementsByName("exercise-1");
    if(
        partes[0].value=="I" &&
        partes[1].value=="Will" &&
        partes[2].value=="not" &&
        partes[3].value=="take" &&
        partes[4].value=="a papaya"
    ){
        alert("congratulations, you got it!"); 
    }else{
        alert("sorry, try again.^_^");
    }
}