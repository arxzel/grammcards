function saludar(){
    alert("¡Wellcome to your practice!");
}

function verifiInterrogative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(elementos[0].value == "wh" &&
      elementos[1].value == "Should" &&
      elementos[2].value == "subject" &&
      elementos[3].value == "Verb" &&
      elementos[4].value == "complement" &&
      elementos [5].value == "?"
      ){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}


function verifiaffirmative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(elementos[0].value == "Subject" &&
      elementos[1].value == "Should" &&
      elementos[2].value == "Verb" &&
      elementos[3].value == "Complement"
      ){
        alert("Correct!");
        window.location.href="affirmative_exercise/exercise_1.html";
    }else{
        alert("error, it is not correct");
    }
}


function verifiNegative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(true){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}