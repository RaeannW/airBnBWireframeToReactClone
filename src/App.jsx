import { Routes, Route } from "react-router-dom";
import Mainframe from "./components/Mainframe";
import Home from "./pages/Home";
import Experiences from "./pages/Experiences";
import Services from "./pages/Services";

function App() {
  return (
    <>
    <div className="background">
      <h1 className="linkToFigma">Click <a href="https://www.figma.com/design/93SphAbNBCXQ1tSCfNNThy/Assignments-2---3?node-id=0-1&t=SgVQDTDttto1f8X8-1" target="_blank">here</a> to view wire frames in Figma</h1>
      <Mainframe />
      <Routes>
        <Route element={<Mainframe />}>
          <Route path="/" element={<Home />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
