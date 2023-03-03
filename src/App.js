import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./routes/Home";
import { BulletForm } from "./routes/BulletForm";
import { ThreadPost } from "./routes/ThreadPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bulletform/" element={<BulletForm />} />
        <Route path="/threadpost" element={<ThreadPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
