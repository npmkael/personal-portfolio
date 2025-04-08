import { useState, useEffect } from "react";
import { AnimatedSpan, Terminal, TypingAnimation } from "./components/Terminal";
import MainPage from "./pages/MainPage";
import { AnimatePresence } from "motion/react";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 11500);

    return () => clearTimeout(timer); // cleanup the timer on unmount
  }, [loadingComplete]);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {loadingComplete ? (
          <MainPage />
        ) : (
          <main className="p-4 flex items-center justify-center h-screen overflow-hidden">
            <Terminal>
              <TypingAnimation>
                &gt; npx install ezekielcarreon@latest init
              </TypingAnimation>

              <AnimatedSpan delay={2900} className="text-green-500">
                <span>✔ Preflight checks.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={3900} className="text-green-500">
                <span>✔ Verifying framework. Found React + Vite.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={4900} className="text-green-500">
                <span>✔ Validating Tailwind CSS.</span>
              </AnimatedSpan>

              <AnimatedSpan delay={5900} className="text-green-500">
                <span>✔ Updating app/globals.css</span>
              </AnimatedSpan>

              <AnimatedSpan delay={6900} className="text-green-500">
                <span>✔ Installing dependencies.</span>
              </AnimatedSpan>

              <TypingAnimation delay={8200} className="text-muted">
                Success! Project initialized completed.
              </TypingAnimation>
            </Terminal>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
