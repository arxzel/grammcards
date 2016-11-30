function saludar(){
    alert("Welcome to this new level")
}

function verifi_exercise_1(){
    var partes = document.getElementsByName("excersise-1"); 
    if(
        partes [0] == "did(aux)" &&
        partes [1] == "he" &&
        partes [2] == "walk" &&
        partes [3] == "to school" &&
        partes [4] == "?"
    ){
        alert("exelent! you are a good student ^_^");
    }else{
        alert("try again :( ");
    }
}