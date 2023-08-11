import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Bio from "./Pages/Bio";
import Photos from "./Pages/Photos";
import Schedule from "./Pages/Schedule";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>}/>
        <Route path="/bio" element={<Bio/>}/>
        <Route path="/photos" element={<Photos/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
