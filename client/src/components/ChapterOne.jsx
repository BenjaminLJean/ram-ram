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


  const dialogue = [
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome travelerrrrrrrrrr. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothingggggg", gChoice: true },
        { answerTxt: "Go Awaaaaaay", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
  ];


  const deathButton = () => {
    console.log('dead');
    // setStatus("Dead")
    // setRank("Legend")
    //history.push(homescreen)
    console.log(kCount);
  }

  const [name, setName] = useState("");
  const [rank, setRank] = useState("Runt");
  const [status, setStatus] = useState("Alive")
  const { id } = useParams();
  const [currentScenario, setCurrentScenario] = useState(0);

  let [kCount, setKCount] = useState("0");

  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      const { fields } = res.data;
      setName(fields.name);
      setRank(fields.rank);
      setStatus(fields.status);
      console.log(fields.status);
    };

    fetchPlayer();
  }, []);


  const switchScenes = () => {
    const nextScene = currentScenario + 1;
    setCurrentScenario(nextScene);
  }

  return (
    <div>
      <div className="screen">
        <div className="scenarioText">
          {dialogue[currentScenario].scenarioText}
        </div>
      </div>

      <div className="answerBox">
        {dialogue[currentScenario].decisions.map((decision) =>
          <button
            onClick={switchScenes}>{decision.answerTxt}
          </button>)}

        {/* <button onClick={() => setKCount(kCount + 1)}>
          Choice
        </button>
        <button onClick={deathButton}>
          Death
        </button> */}
      </div>
    </div>
  )
}
