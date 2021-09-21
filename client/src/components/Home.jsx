import PreviousAttemps from "./PreviousAttemps";
import NewPlayer from "./NewPlayer"


export default function Home() {

  return (
    <div>
      <div className="Title">
        <h1>Welcome to RAM-RAM</h1>
        <h3>The Biased Adventure Game</h3>
      </div>
      <div className="description">
        <p>Here in RAM-RAM everything may not be what it seems like. This is a simple decision based app that
          detemines your rank at the end of it.... if you make it that is...
        </p>
      </div>
      <div className="scoreboard">
        <PreviousAttemps />
      </div>
      <NewPlayer />
    </div>
  )
}
