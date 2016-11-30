function saludar(){
    alert("Welcome to this new level");
}

function verifi_exercise_1(){
    var partes = document.getElementsByName("exercise-1");
    if(
        partes[0] == "I" &&
        partes[1] == "should" &&
        partes[2] == "eat" &&
        partes[3] == "more fruits" 
    ){
        alert("Congratulations! you are a good student ^_^");
    }else{
        alert("Sorry, you have some errors, try again :( ");
    }
}