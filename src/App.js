
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
// import React, { useRef } from 'react';


function App() {

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
    browserSupportsContinuousListening,
    // continuous
  } = useSpeechRecognition();

  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  if (!isMicrophoneAvailable) {
    return alert("Connect Microphone");
  }




//   if (browserSupportsContinuousListening) {
//   // SpeechRecognition.startListening({ continuous: true })
// } else {
//   return <span> Not Working</span>
// }


// var changename='stop';

  return (
    <div className="App">

    <h1 align="center"> Speech to Text Recognition</h1>
      <div className="Top">
        <div className="T_left">
        <p> {listening ? 'Listening...' : 'Press Start Button for Listening'}</p> <br />
            <p>{transcript}</p>
        </div>
        {/* <div className="T_right">
        Just for animation 
        <div className="boxContainer">

              <div className="box box1"  ></div>
              <div className="box box2"></div>
              <div className="box box3"></div>
              <div className="box box4"></div>
              <div className="box box5"></div>
          </div>
        </div> */}
      </div>


        <footer className="buttons">
            <button onClick={()=>{
              SpeechRecognition.stopListening()

              }}>Stop</button>
            <button onClick={()=>{
                                if (browserSupportsContinuousListening) {
                    SpeechRecognition.startListening({ continuous: true })
                 
                  } else {
                    <span> Your Browser Donot Support Speech Recognition Version</span>
                  }
            }} >Start</button>
       

            <button onClick={resetTranscript}>Reset</button>
            
       
        </footer>
    </div>
  );
}

export default App;
