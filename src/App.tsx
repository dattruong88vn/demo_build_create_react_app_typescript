import Webcam from "react-webcam";
import "./App.css";

(window as any)["ReactNativeWebView"].postMessage(
  JSON.stringify({
    type: "OPEN_CAMERA",
  })
);

function App() {
  return (
    <div className="App">
      <Webcam />
    </div>
  );
}

export default App;
