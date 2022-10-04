import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/navbar";
import Footbar from "./Components/footer";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar />

      <Footbar />
    </div>
  );
}

export default App;
