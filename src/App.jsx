// src/App.jsx
import React from "react";
import "./App.scss";
import { NextUIProvider } from "@nextui-org/react";

//Components
import Stars from "./components/Stars/Stars";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";

function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <div className="bg"></div>
        <Stars />
        <div className="content">
          <Header />
          <Body />
        </div>
      </div>
    </NextUIProvider>
  );
}

export default App;
