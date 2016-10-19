function saludar(){
    alert("¡Wellcome to your practice!");
}

function verifiInterrogative(){
    var elementos = document.getElementsByName("select-choice-mini");
    if(elementos[0].value == "wh" &&
      elementos[1].value == "aux-do-does" &&
      elementos[2].value == "subject" &&
      elementos[3].value == "verbInf" &&
      elementos[4].value == "complement" &&
      elementos [5].value == "?"){
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
    }else{
        alert("error, it is not correct");
    }
}