function saludar(){
    alert("welcome to exercise 1");
}
function verifiExercise1(){
    var partes=document.getElementsByName("exercise-1");
    if(
    partes[0].value=="she"&&
    partes[1].value=="read"&&
    partes[2].value=="the newspaper every day"
){   
       alert("Congratulations, you got it!");
    }else{
         alert("sorry, try again. X_X")
    } 
}