function saludar(){
    alert("welcome to exercise 1");
}
function verifiexercise1(){ 
    var partes= document.getElementsByName("exercise-1");
    if( 
        partes[0].value=="she" &&
        partes[1].value=="does" &&
        partes[2].value=="not" &&
        partes[3].value=="dance" &&
        partes[4].value=="pop" 
  ){
        alert("congratulations, you got it!");
    } else{
        alert("sorry, try again. ^_^");
    }
}