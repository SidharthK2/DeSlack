import { useState } from "react";
import Homepage from "./components/Homepage";
import Landingpage from "./components/Landingpage";
import { useMoralis } from "react-moralis";

function App() {
  const { isWeb3Enabled } = useMoralis();

  return (
    <div className="App">
      {!isWeb3Enabled && <Landingpage />}
      {isWeb3Enabled && <Homepage />}
    </div>
  );
}

export default App;
