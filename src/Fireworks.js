import { useState } from "react";
import { Fireworks } from "@fireworks-js/react";

export function Fire() {
  const [fire, setFire] = useState(false);

  return (
    <>
      <button className="button-primary" onClick={() => setFire(!fire)}>
        Zostanę
      </button>
      {fire && (
        <Fireworks
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "fixed",
            background: "transparent",
          }}
        />
      )}
    </>
  );
}
