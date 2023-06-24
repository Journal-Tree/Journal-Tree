import "./_stylesheet/style.css";
import { Routes, Route } from "react-router-dom";
import MoodAnalysis from "./pages/MoodAnalysis";
import PromptQuestion from "./pages/PromptQuestions/PromptQuestion";
import Results from "./pages/Results/Results";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Welcome Back, Sam!</h1>
        <Routes>
          <Route path="/" element={Home} />
          <Route path="/mood-analysis" element={MoodAnalysis} />
          <Route path="/prompt-questions" element={PromptQuestion} />
          <Route path="/results" element={Results} />
        </Routes>
      </div>
    </main>
  );
}
