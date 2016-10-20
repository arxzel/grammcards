function saludar(){
    alert("Wellcome to exercise 1");
}

function verifiExercise1(){
    var partes= document.getElementsByName("exercise-1");
    if(
        partes[0].value=="i"&&
        partes[1].value=="should"&&
        partes[2].value=="study"&&
        partes[3].value=="more for learn better"
    ){
        alert("Congratulations! ^_^");
    }else{
        alert("Sorry, you are incorrect! :(")
    }
}

/*
esto es lo que se lleva hasta la fecha
@
function verifiExercise1(){
    var partes= document.getElementsByName("exercise-1");
    if(
        partes[0].value=="i"&&
        partes[1].value=="should"&&
        partes[2].value=="study"&&
        partes[3].value=="more for learn better"
    ){}
}
*/