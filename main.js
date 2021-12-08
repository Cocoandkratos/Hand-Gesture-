prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');



function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_image" src = "'+data_uri+'"/>';
    })
}


console.log('ml5version',ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/pU10TCj5k/model.json',modelloaded);

function modelloaded(){
    console.log('Model Loaded!');
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is "+prediction_1;
    speak_data_2 = "The second prediction is "+prediction_2;
    var utterthis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterthis);
}