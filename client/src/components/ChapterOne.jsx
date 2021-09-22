import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";




const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/scoreboard`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`,
  },
};

export default function ChapterOne() {


  let dialogue = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
    "labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in",
    "voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident",
    "sunt in culpa qui officia deserunt mollit anim id est laborum."];

  const [name, setName] = useState("");
  const [rank, setRank] = useState("Runt");
  const [status, setStatus] = useState("Alive")
  const { id } = useParams();



  useEffect(() => {
    const fetchPlayers = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      const { fields } = res.data;
      setName(fields.name);
      setRank(fields.rank);
      setStatus(fields.status);
    };

    fetchPlayers();
  }, []);

  return (
    <div>
      <div className="screen">
        <p>{dialogue}</p>
      </div>

      <div className="selectionBox">
        <button onClick="">
          Test1
        </button>
        <button onClick="">
          tEST2
        </button>
        <button onClick="">
          TesT3
        </button>
        <button onClick="">
          tESt4
        </button>
      </div>
    </div>
  )
}
