import "./DeathPage.css";
import { Link } from "react-router-dom"






export default function DeathPage() {

  return (
    <div className="body">
      <div className="deadpic"> <img src="https://slm-assets.secondlife.com/assets/10884699/view_large/You-Died.jpg?1420615598" alt="You have died" className="pic" /> </div>
      <h1 className="message">Try to be nicer or Try to address your problems</h1>
      <p className="thank-message">You made a wonderful effort, although it futile in the End. THANKS FOR PLAYING!</p>
      <h1 className="return-link"><Link to="">Return to Main Screen</Link></h1>
    </div>
  )
}
