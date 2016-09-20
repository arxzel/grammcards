function saludar(){
    alert("¡Wellcome to your practice!");
}

function verifiInterrogative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(elementos[0].value == "wh" &&
      elementos[1].value == "will" &&
      elementos[2].value == "subjet" &&
      elementos[3].value == "verb" &&
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
    if(
        elementos[0].value == "subject" &&
        elementos[1].value == "will" &&
        elementos[2].value == "verb" &&
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
          elementos[0].value == "subjet" &&
          elementos[1].value == "will" &&
          elementos[2].value == "not" &&
          elementos[3].value == "verb-in-present" &&
          elementos[4].value == "complement" 
    ){
        alert("Correct!");
    }else{
        alert("error, it is not correct");
    }
}