import { useState } from "react";
import { Link } from "react-router-dom";
import PreviousAttemps from "./PreviousAttemps";




export default function Home() {

  const [avatar, setAvatar] = useState("");

  function startGame() {
    //change the page
    //karmic system build it in chapter page
    //
  }

  return (
    <div>
      <div className="Title">
        <h1>Welcome to RAM-RAM</h1>
        <h3>The Biased Adventure Game</h3>
      </div>
      <PreviousAttemps />
      <input type="text" value={avatar} onSubmit={setAvatar} />
      <button onClick={startGame}><Link to="/chapterone">Play!</Link></button>
    </div>
  )
}
