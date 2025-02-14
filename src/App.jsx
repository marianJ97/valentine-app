import "./App.css";
import { Route, Routes } from "react-router";
import { Login } from "./pages/Login";
import { Quiz } from "./pages/Quiz";
import { Gift } from "./pages/Gift";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/gift" element={<Gift />} />
    </Routes>
  );
}

export default App;
