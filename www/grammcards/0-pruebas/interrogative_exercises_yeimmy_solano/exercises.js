function saludar () {
    alert("wolcome to exercise 1");
}
function verifiExercise1(){
    var partes=document.getElementsByName("exercise-1"); 
     if(
         partes[0].value=="where"&&
         partes[1].value=="was"&&
         partes[2].value=="she"&&
         partes[3].value=="doing"&&
         partes[4].value=="yesterday"&&
         partes[5].value=="?"
    ){
         alert("congratulations, you got it!");
     } else {
         alert("sorry, try again. ^_^");
     } 
     
}
         
         