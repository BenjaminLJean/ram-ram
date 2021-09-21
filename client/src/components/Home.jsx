import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";




export default function Home() {

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [rank, setRank] = useState("");
  const [status, setStatus] = useState("");

  const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
  const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
  const URL = `https://api.airtable.com/v0/${airTableBase}/scoreboard`

  const config = {
    headers: {
      Authorization: `Bearer ${airTableKey}`,
    },
  };

  const handleSubmit = async () => {
    const stat = {
      name,
      rank,
      status,
    }
    const res = await axios.get(URL, { stat }, config);
    console.log(res.data);
  }

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
      {/* fix this */}

      <h3>{name}   {rank}, {status} </h3>
      <input type="text" value={avatar} onSubmit={setAvatar} />
      <button onClick={startGame}>Play!</button>
    </div>
  )
}
