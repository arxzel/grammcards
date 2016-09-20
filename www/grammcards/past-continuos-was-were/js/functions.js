function saludar(){
    alert("¡Wellcome to your practice!");
}

function verifiInterrogative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(elementos[0].value == "wh" &&
      elementos[1].value == "was-were" &&
      elementos[2].value == "subjetc" &&
      elementos[3].value == "verb" &&
      elementos[4].value == "ing" &&
      elementos[5].value == "complement" &&
      elementos [6].value == "?"
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
        
      elementos[1].value == "was-were" &&
        
      elementos[2].value == "verb" &&
        
      elementos[3].value == "ing" &&
        
      elementos[4].value == "complement" 
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
        elementos[1].value == "was-were" &&
        elementos[2].value == "not" &&
        elementos[3].value == "verb" &&
        elementos[4].value == "complement" 
    ){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}