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

  // THIS IS TO UPDATE THE PLAYER INFO ONCE DONE. -work in progress-
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const fields = {
  //     name,
  //     rank,
  //     status,
  //   }
  //   const res = await axios.put(URL, { fields }, config);
  //   // console.log(res.data);
  //   setStatus("Alive")
  //   setRank("Runt")
  //   setId(res.data.id)
  //   history.push(`/chapterone/${res.data.id}`);
  // }


  const switchScenes = () => {
    const nextScene = currentScenario + 1;
    nextScene < dialogue.length ? setCurrentScenario(nextScene) : alert("Chapter one is over!")
  }

  const dialogue = [
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", deathButton: true },
      ]
    },
    {
      scenarioText: `Well, if thats the case then be careful when going down the valley. Lots of rumors of people running into Explosive frogs! Sounds like a nasty predicament.`,
      decisions: [
        { answerTxt: "Thanks", gChoice: true },
        { answerTxt: "Go Awaaaaaay", deathButton: true },
      ]
    },
    {
      scenarioText: `~You see a frog hop onto the road about 100 feet away from you~`,
      decisions: [
        { answerTxt: "Turn around", gChoice: true },
        { answerTxt: "Keep walking", deathButton: true },
      ]
    },
    {
      scenarioText: `~After a long walk, you stumble across the man that spoke to you earlier and thank him for the heads up. He offers you a ride to the nearby town he's heading to~`,
      decisions: [
        { answerTxt: "Ride with Him", gChoice: true },
        { answerTxt: "Refuse the offer", deathButton: true },
      ]
    },
    {
      scenarioText: `~You get to the town and think about where your going to stay for the night. You see two options, The Tavern and The Loft...~ Hey there ${name}, where you'r staying?`,
      decisions: [
        { answerTxt: "The Tavern", gChoice: true },
        { answerTxt: "The Loft", deathButton: true },
      ]
    },
  ];



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
