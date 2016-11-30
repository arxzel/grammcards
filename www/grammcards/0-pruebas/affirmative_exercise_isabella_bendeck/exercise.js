function saludar(){
    alert("welcome to exercise 1");
}
function verifiexercise1 () {
    var partes= document.getElementsByName("exercise-1"); 
    if (
        partes[0].value=="i"&&
        partes[1].value=="am"&&
        partes[2].value=="going to"&&
        partes[3].value=="the park"
    ){
        alert("congratulations, you got it!");
    }else {
        
        alert("sorry, try again ^_^")
    }
}