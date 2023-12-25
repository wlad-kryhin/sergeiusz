import "./App.css";
import Main from "./Main";
import { useState } from "react";

function App() {
  const [showMain, setShowMain] = useState(false);
  return (
    <>
      <div className="App">
        {showMain ? (
          <Main />
        ) : (
          <div style={{ padding: 20, textAlign: "center" }}>
            <p style={{ fontSize: 40 }}>
              Cześć, Sergei! Kiedy będziesz gotowy, kliknij tutaj.
            </p>
            <button className="button" onClick={() => setShowMain(!showMain)}>
              lecimy z koksem
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
