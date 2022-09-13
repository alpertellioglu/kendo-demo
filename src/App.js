import "./App.css";
import "@progress/kendo-theme-default/dist/all.css";
import { useState } from "react";
import Profile from "./pages/Profile.jsx";
import "./styles/common.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DrawerRouterContainer from "./components/DrawerRouterContainer";
import Home from "./pages/Home";
import Info from "./pages/Info";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DrawerRouterContainer>
          <Switch>
            {/* <Route exact={true} path="/" element={<Dashboard />} />
            <Route exact={true} path="/planning" element={<Planning />} />
            <Route exact={true} path="/info" element={<Info />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/info" component={Info} />
          </Switch>
        </DrawerRouterContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
