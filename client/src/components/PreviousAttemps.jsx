import { useState, useEffect } from "react";
import axios from "axios";


const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/scoreboard`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`,
  },
};


export default function PreviousAttemps() {

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await axios.get(URL, config)
      setPlayers(res.data.records);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <div className="scoreboard-heading"><h2>Here lies the hall of Fools</h2></div>

      {players.map((player) => {
        return <div key={player.id}>
          <h4>{player.fields.name}</h4> {player.fields.rank} - {player.fields.status}</div>
      })}
    </div>
  )
}
