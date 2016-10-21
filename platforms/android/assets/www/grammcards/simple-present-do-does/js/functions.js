function saludar(){
    alert("¡Welcome to your practice!");
}

function verifiInterrogative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(
      elementos[0].value == "aux-do-does" &&
      elementos[1].value == "subject" &&
      elementos[2].value == "verbInf" &&
      elementos[3].value == "complement" &&
      elementos[4].value == "?"){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}


function verifiaffirmative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(
        elementos[0].value =="subject"&&
        elementos[1].value =="verb"&&
        elementos[2].value == "complement"
        ){
        alert("Correct!");
        window.location.href="affirmative_exercise/exercise_1.html";
    }else{
        alert("error, it is not correct");
    }
}


function verifiNegative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(
        elementos[0].value =="subject"&&
        elementos[1].value =="do-does"&&
        elementos[2].value =="not"&&
        elementos[3].value =="verb"&&
        elementos[4].value =="complement"
        ){
        alert("Correct!");
        window.location.href="negative-exercises/exercise_1.html";
    }else{
        alert("error, it is not correct");
    }
}