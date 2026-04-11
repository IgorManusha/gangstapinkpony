import logo from "./logo.svg";
import "./App.css";
import AudioFile from "./img/Game.mp3";
import AudioFile2 from "./img/secondTreck.mp3";
import AudioFile3 from "./img/trek.wav";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="mainTitleGansta">Meet Gangsta</h2>
        <div className="decoreLine"></div>
        <h2 className="mainTitle">Pinck Pony</h2>
        <div className="audioContainer">
          <audio controls>
            <source src={AudioFile} type="audio/wav" />
          </audio>
          <audio controls>
            <source src={AudioFile2} type="audio/wav" />
          </audio>
          <audio controls>
            <source src={AudioFile3} type="audio/wav" />
          </audio>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
