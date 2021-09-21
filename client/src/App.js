import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ChapterOne from './components/ChapterOne';



function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/chapterone">
        <ChapterOne />
      </Route>
    </div>
  );
}

export default App;
