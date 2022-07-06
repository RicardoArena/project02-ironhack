import { CreateRest } from "./pages/CreateRest";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { RestPage } from "./pages/RestPage";
import { EditRest } from "./pages/EditRest";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createrest" element={<CreateRest />} />
        <Route path="/rest/:id" element={<RestPage />} />
        <Route path="/editrest/:id" element={<EditRest />} />
      </Routes>
    </>
  );
}

export default App;
