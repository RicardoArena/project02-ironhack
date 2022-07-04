import { CreateRest } from "./pages/CreateRest";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createrest" element={<CreateRest />} />
      </Routes>
    </>
  );
}

export default App;
