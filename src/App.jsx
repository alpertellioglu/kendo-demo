import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";

import "./styles/common.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/info" component={Info} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
