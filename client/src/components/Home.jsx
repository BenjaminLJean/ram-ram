import PreviousAttemps from "./PreviousAttemps";
import NewPlayer from "./NewPlayer"
import './Home.css';


export default function Home() {

  return (

    <div className="body">
      <div className="Title">
        <h1>Welcome to RAM-RAM</h1>
        <h3>The Biased Adventure Game</h3>
      </div>
      <div className="description">
        <p className="description_text">Here in RAM-RAM everything may not be what it seems like. This is a simple decision based app that
          detemines your rank at the end of it.... if you make it that is...
        </p>
      </div>
      <div className="scoreboard-container">
        <div className="scoreboard">
          <PreviousAttemps />
        </div>
      </div>
      <div className="inputArea">
        <NewPlayer />
      </div>
    </div >
  )
}
