import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Bio from "./Pages/Bio";
import Photos from "./Pages/Photos";
import Schedule from "./Pages/Schedule";
import Contact from "./Pages/Contact";
import Store from "./Pages/Store";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminFeatured from "./Pages/Admin/AdminFeatured";
import FeaturedEdit from "./Components/FeaturedEdit";

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
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/admin/featured" element={<AdminFeatured/>}/>
        <Route path="/admin/featured/edit/:itemId" element={<FeaturedEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
