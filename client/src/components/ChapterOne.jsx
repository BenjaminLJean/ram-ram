import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useHistory } from "react-router";
import "./ChapterOne.css"


const airTableKey = process.env.REACT_APP_AIRTABLE_KEY;
const airTableBase = process.env.REACT_APP_AIRTABLE_BASE;
const URL = `https://api.airtable.com/v0/${airTableBase}/scoreboard`

const config = {
  headers: {
    Authorization: `Bearer ${airTableKey}`,
  },
};

export default function ChapterOne() {


  const [name, setName] = useState("");
  const [rank, setRank] = useState("Runt");
  const [status, setStatus] = useState("Alive")
  const { id } = useParams();
  const [currentScenario, setCurrentScenario] = useState(0);
  const history = useHistory();

  let [kCount, setKCount] = useState("0");



  useEffect(() => {
    const fetchPlayer = async () => {
      const res = await axios.get(`${URL}/${id}`, config)
      const { fields } = res.data;
      setName(fields.name);
      setRank(fields.rank);
      setStatus(fields.status);
    };

    fetchPlayer();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const playerDied = async () => {
    setRank("Fool")
    setStatus("Dead")
    setKCount(0);
    await handleSubmit("Fool", "Dead");
    history.push(`/deathpage`);
    console.log(rank, status, kCount)
  }

  const chapterDone = async () => {
    setRank("Confused")
    setStatus("Mystic")
    setKCount(0);
    await handleSubmit("Confused", "Mystic");
    history.push(`/`);
  }

  const handleSubmit = async (currentRank, currentStatus) => {
    const fields = {
      name,
      rank: currentRank,
      status: currentStatus,
    }
    const res = await axios.put(`${URL}/${id}`, { fields }, config);
    console.log(res.data);
  }


  const switchScenes = (gChoice, deathButton) => {

    gChoice === true ? setKCount(prevCount => prevCount + 1) : setKCount(prevCount => prevCount - 2)
    deathButton === true ? playerDied() : setKCount(prevCount => prevCount + 2)

    const nextScene = currentScenario + 1;
    nextScene < dialogue.length ? setCurrentScenario(nextScene) : chapterDone()
  }

  const dialogue = [
    {
      scenarioText: `Welcome traveler. What are you doing out over here in these dangerous times?`,
      decisions: [
        { answerTxt: "Nothing", gChoice: true },
        { answerTxt: "Go Away", gChoice: false },
        { answerTxt: "Plan on seeing the city", gChoice: true },
        { answerTxt: "Not sure, just traveling", gChoice: true },
      ]
    },
    {
      scenarioText: `Well, if thats the case then be careful when going down the valley. Lots of rumors of people running into Explosive frogs! Sounds like a nasty predicament.`,
      decisions: [
        { answerTxt: "Thanks (Keep Walking)", gChoice: true },
        { answerTxt: "Go Awaaaaaay", gChoice: false },
        { answerTxt: "Exploding frogs? Thats crazy", gChoice: true },
        { answerTxt: "Makes no difference to me", gChoice: false },
      ]
    },
    {
      scenarioText: `The man says farewell, you both go your seperate ways and while you continue on walking you do hear a abundance of croacking and think to yourself how did the man himself get by.`,
      decisions: [
        { answerTxt: "Turn around", deathButton: true },
        { answerTxt: "Keep walking", deathButton: false },
      ]
    },
    {
      scenarioText: `You walked and you walked, treading along the road and past what sounded like an army of exploding frogs. You've come to believe that it was nothing but a mere illusion and that either that man was delusional or a liar. Either way it didn't matter to you anymore. You got past all of that and can now view the moist forest not to far from where you are. You recognized that it near the location of VainsVille, the nearby central village.`,
      decisions: [
        { answerTxt: "Take a break", gChoice: true },
        { answerTxt: "Keep walking", deathButton: false },
      ]
    },
    {
      scenarioText: `You arrive at the village and decided to spend the night. Your not sure how to feel and cant help but be thrown off about the warning about the frogs. You tell yourself its nothing to worry about then head out to eat before sleeping for the night. Entering inside a local inn, you notice it was also a dinner, and immediately see both the "Birgade Broth" and the "TemptressLet" Once you got seated your immediately approached by someone. "What can i get you stranger?"`,
      decisions: [
        { answerTxt: "Brigade Broth and pale water please", gChoice: true },
        { answerTxt: "Temp... Tem... This with water please", gChoice: true },
      ]
    },
    {
      scenarioText: `Sure thing bud!, The person then leaves off after taking your order. You look aorund and notice the diner has an amazing scenery. The people seem nice and behaved but are also having fun. The mnusic is subtle but uplifting and the smell itself seems to stir your appetite. Your order comes after some time of you sitting and pondering. You enjoyed the food quite a bit, and now want to head to an inn to rest for the remaning of the evening and the night. You notice no one has returned for payment.`,
      decisions: [
        { answerTxt: "Dont pay and leave", gChoice: false },
        { answerTxt: "Leave the money on the table", gChoice: true },
        { answerTxt: "Leave a little bit of money on the table", gChoice: false },
        { answerTxt: "Put the bowl and plate in your bag and leave", gChoice: false },
      ]
    },
    {
      scenarioText: `You left the diner and found a Tavern at the other side of the town. You pay for a night and head to your room to rest. After sitting down the on the bed you open your bag to reveal the odd green jewel you managed to find before this adventure game even began. You notice it pulsating and becoming a odd shape.`,
      decisions: [
        { answerTxt: "Touch it", gChoice: true },
        { answerTxt: "Wrap it back up and leave it in your bag", deathButton: true },
        { answerTxt: "Look at it closer.", gChoice: true },
      ]
    },
    {
      scenarioText: `The Jewel immediately attaches itself onto your hand and a sudden sharp pain occurs. You jump back being so startled amd attempt to remove the jewel but it seeps itslf into your skins and begins to burn the more it enters. You groan quitely in agonizing pain since you do not want to alert the rest of the people in the inn. Soon the pain subsides and you are tired and out of energy. You simply fall asleep thinking about what just happen. Next morning you wake up and immediately leave to continue on your quest to the Apalche. On the way you see a robbery happening to a man nearby.`,
      decisions: [
        { answerTxt: "Run to go help", gChoice: true },
        { answerTxt: "Avoid the robbery and hide out of sight", gChoice: false },
        { answerTxt: "Shout to the guy to stop", gChoice: true },
      ]
    },
    {
      scenarioText: `Before you got to do anyhting, the man was stabbed by the mugger immediately. He grabs the mans bag and runs off with it but leaves the cart with items. The man is pleading to help while groaning and gasping for air.`,
      decisions: [
        { answerTxt: "Go help the man", gChoice: false },
        { answerTxt: "Avoid the man for he is about to die", deathButton: true },
        { answerTxt: "Take the cart since the man is going to die", gChoice: false },
      ]
    },
    {
      scenarioText: `The bleeding man prays right before his last breathe and you waited to listen. Or so you thought. The man sounded angry, and was speaking of revenge and wanted the man who robbed him to be smitten. Shocked from listening you leave immediatelynot wanting to be in the blast radius just in case this prayer was granted by any means. Although suddenly you walked back a step and fall into a puddle and somehow this puddle seems to be getting deeper and deeper. You do not feel fear since you do not have the urgency to breathe. A bright light shines in front of you and the Jewel that went inside of you appears before you. It glows and then calls out your name, ${name}...`,
      decisions: [
        { answerTxt: "Umm, Hi?", gChoice: true },
        { answerTxt: "First i get burned not im being drowned!?", gChoice: false },
        { answerTxt: "I have somewhere to be...", gChoice: false },
        { answerTxt: "Get me out!", gChoice: false },
      ]
    },
    {
      scenarioText: `${name} We have to talk...`,
      decisions: [
        { answerTxt: "Idk Chief. I rather not talk with a stranger", gChoice: true },
        { answerTxt: "Umm, Okeh", gChoice: true },
      ]
    },
  ];



  return (
    <div className="body">
      <div className="screen">
        <div className="picture-container">
          <img src="https://gal.cdn.renderosity.com/images/image_1526654/file_1526654.jpg?v=1190520184" alt="Grassy Road" className="grasspic" />
        </div>
        <div className="scenarioText">
          {dialogue[currentScenario].scenarioText}
        </div>
      </div>

      <div className="answerBox">
        {dialogue[currentScenario].decisions.map((decision) =>
          <button className="answerButton"
            onClick={() => switchScenes(decision.gChoice, decision.deathButton)}>{decision.answerTxt}
          </button>)}
      </div>
    </div>
  )
}
