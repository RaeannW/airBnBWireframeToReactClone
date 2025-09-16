import { Routes, Route } from "react-router-dom";
import Mainframe from "./components/Mainframe";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Mainframe />
      <Routes>
        <Route element={<Mainframe />}>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
