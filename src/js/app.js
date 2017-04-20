var speechOutput = document.getElementById("speech");

var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.onresult = function (event) {
    speechOutput.innerText = event.results[0][0].transcript + (event.results[0].isFinal?".":"...");

    if (event.results[0].isFinal)
        console.log(event);
}
recognition.start();