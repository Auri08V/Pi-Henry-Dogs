import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Home } from "./Components/Home/Home";
import { Detail } from "./Components/Detail/Detail";
import { NavBar } from "./Components/NavBar/NavBar";
import { Form } from "./Components/Form/Form";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/form" component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
