function saludar(){
    alert("¡Wellcome to your practice!");
}

function verifiInterrogative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(
      elementos[0].value == "verb-to-be" &&
      elementos[1].value == "subject" &&
      elementos[2].value == "adjetives" &&
      elementos[3].value == "complement" &&
      elementos [4].value == "?"
      ){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}


function verifiaffirmative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(
         elementos[0].value == "subject" &&
         elementos[1].value == "verb to be" &&
         elementos[2].value == "adjective" &&
         elementos[3].value == "complement" 
    ){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}


function verifiNegative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(
        elementos[0].value == "subject" &&
        elementos[1].value == "verb to be" &&
        elementos[2].value == "not" &&
        elementos[3].value == "adjective" &&
        elementos[4].value == "complement" 
    ){
        alert("Correct!");
        window.location.href="negative-exercises/exercise_1.html";
    }else{
        alert("error, it is not correct");
    }
}