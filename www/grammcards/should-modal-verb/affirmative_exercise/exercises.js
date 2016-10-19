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
        alert("Correc!, you have wined the first exercise! \n congratulations");
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