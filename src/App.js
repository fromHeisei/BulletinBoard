import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { BulletForm } from "./routes/BulletForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulletform/" element={<BulletForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
