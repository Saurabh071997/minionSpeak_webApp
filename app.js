var textInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#txt-output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";


function getUrl( inputText){
    return serverUrl+"?"+"text="+inputText;
}

function errorHandler(){
    swal({
        title: "Server Error",
        text: "There is some issue connecting the server. Try again later !! ",
        icon: "warning",
        button: "OK",
      });
}

function clickHandler(){
    var inputText = textInput.value ;

    fetch(getUrl(inputText))
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        outputDiv.innerText = outputText;
    })
    .catch(errorHandler);
   
}

btnTranslate.addEventListener("click", clickHandler);