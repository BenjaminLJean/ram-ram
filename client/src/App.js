import './App.css';
import { Route } from "react-router-dom";
import Home from "./components/Home";
import ChapterOne from './components/ChapterOne';
import DeathPage from './components/DeathPage';



function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home className="home" />
      </Route>
      <Route exact path="/chapterone/:id">
        <ChapterOne />
      </Route>
      <Route path="/deathpage">
        <DeathPage />
      </Route>
    </div>
  );
}

export default App;
