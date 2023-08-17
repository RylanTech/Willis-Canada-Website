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
import FeaturedAdd from "./Components/FeaturedAdd";
import AdminPost from "./Pages/Admin/AdminPost";
import PostEdit from "./Components/PostsEdit";
import PostAdd from "./Components/PostAdd";
import AdminSlides from "./Pages/Admin/AdminSlides";
import SlideEdit from "./Components/SlideEdit";
import SlideAdd from "./Components/SlideAdd";

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
        <Route path="/admin/featured/add" element={<FeaturedAdd/>}/>
        <Route path="/admin/posts" element={<AdminPost/>}/>
        <Route path="/admin/posts/edit/:postId" element={<PostEdit/>}/>
        <Route path="/admin/posts/add" element={<PostAdd/>}/>
        <Route path="/admin/slides" element={<AdminSlides/>}/>
        <Route path="/admin/slides/edit/:slideId" element={<SlideEdit/>}/>
        <Route path="/admin/slides/add" element={<SlideAdd/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
