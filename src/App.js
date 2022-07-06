import { CreateRest } from "./pages/CreateRest";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { RestPage } from "./pages/RestPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createrest" element={<CreateRest />} />
        <Route path="/rest/:id" element={<RestPage />} />
      </Routes>
    </>
  );
}

export default App;
