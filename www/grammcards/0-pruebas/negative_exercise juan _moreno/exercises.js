function saludar(){
    alert("welcome ro exercise 1");
}
function veriExercise1(){
    var partes=document.getElementsByName("exercise-1");
    if(
    partes[0].valoe=="i"&&
    partes[1].valoe=="was"&&
    partes[2].valoe=="not"&&
    partes[3].valoe=="work"&&
    partes[4].valoe=="ing"
    ){
      alert("congratulations you go it !");  
    } else{
        alert("sorry, try again. T_T");
    }
}