import logo from "./logo.svg";
import "./App.css";
import audioFile from "./media/trek.wav";
import audioFile2 from "./media/secondTreck.mp3";
import audioFile3 from "./media/Game.mp3";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="mainTitleGansta">Meet Gangsta</h2>
        <div className="decoreLine"></div>
        <h2 className="mainTitle">Pinck Pony</h2>
        <div className="audioContainer">
          <audio controls>
            <source src={audioFile} type="audio/wav" />
          </audio>
          <audio controls>
            <source src={audioFile2} type="audio/wav" />
          </audio>
          <audio controls>
            <source src={audioFile3} type="audio/wav" />
          </audio>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
