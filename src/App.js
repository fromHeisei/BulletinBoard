import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { bulletForm } from "./routes/bulletForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulletForm/" element={<bulletForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
