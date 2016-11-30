function verifi_exercise_1(){
var partes =document.getElementsByName("exercise-1");
    if(
        partes[0] == "she" &&   
        partes[1] == "Was" &&
        partes[2] == "Reading" && 
        partes[3] == "when you arrived" 
    ){
        alert("");("congratulations! your are good student xD");
    }else{
        alert("sorry,you have some errors, try again :(");    
    }
}