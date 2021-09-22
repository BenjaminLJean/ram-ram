import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Route } from "react-router-dom";
import { useParams } from "react-router";
import { useHistory } from "react-router";



const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/scoreboard`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`,
  },
};


export default function NewPlayer() {


  const [name, setName] = useState("");
  const [rank, setRank] = useState("Runt");
  const [status, setStatus] = useState("Alive")
  const [id, setId] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      rank,
      status,
    }
    const res = await axios.post(URL, { fields }, config);
    console.log(res.data);
    setStatus("Alive")
    setRank("Runt")
    setId(res.data.id)
    history.push(`/chapterone/${res.data.id}`);
  }


  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Play!</button>

    </div>
  )
}

