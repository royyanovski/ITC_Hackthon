import React from "react";
import Webcam from "react-webcam";
import './App.css'
import axios from 'axios';

const videoConstraints = {
  width: 1200,
  height: 720,
  facingMode: "user"
};
 
const App = () => {
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      axios.post('http://localhost:3003/images/', {method: "post", body: imageSrc, "Access-Control-Allow-Origin":"*"})
      console.log(imageSrc)
    },
    [webcamRef]
  );

  return (
    <div className="main">
      <div id="video-stream">
        <Webcam
          className = "my-webcam-class"
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          forceScreenshotSourceSize="true"
        />
        <button onClick={capture}>Capture photo</button>
      </div>
    </div>
  );
};

export default App;