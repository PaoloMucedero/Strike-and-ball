import { useState } from "react";
import { generateSecretCombination } from "../gameplay.js";

export default function App() {
  const [secretCombination, setSecretCombination] = useState(generateSecretCombination)

  return (
    <main>
      <h1>Strike &amp; Ball</h1>
    </main>
  );
}
