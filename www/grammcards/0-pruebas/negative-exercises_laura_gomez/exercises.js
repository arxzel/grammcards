function saludar(){
    alert("welcome to exercise 1");
}
function verifiExercise1(){
    var partes= document.getElementsByName("exercise-1");
    if(
        partes[0].value=="i"&&
        partes[1].value=="am"&&
        partes[2].value=="not"&&
        partes[3].value=="a singer"
    ){
        alert("congratulations,you got it!");
    }else{
        alert("sorry,try again ^_^");
    }   
}