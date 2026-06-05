// author : vjlang team
import { useEffect } from "react";
import { createReactAutoRemEffect } from "../src/adapters/react";
import "../styles/responsive.css";

const autoRemEffect = createReactAutoRemEffect();

export function App() {
  useEffect(autoRemEffect, []);

  return (
    <main style={{ padding: "var(--space-6)", fontSize: "var(--text-body)" }}>
      <h1 className="text-display">Responsive App</h1>
      <p>
        This React example uses the generated CSS tokens plus the shared auto-rem
        runtime.
      </p>
    </main>
  );
}
