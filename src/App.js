import logo from "./logo.svg";
import "./App.css";
import background from "./hero-banner.png";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Pages/Register";
import Details from "./Pages/Details";
import Quotes from "./Pages/Quotes";

function App() {
  return (
    <Router style={{ backgroundImage: `url(${background})` }}>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/quotes" component={Quotes} />
      </Switch>
    </Router>
  );
}

export default App;
