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
import AdminPhotos from "./Pages/Admin/AdminPhotos";
import PhotosEdit from "./Components/PhotosEdit";
import PhotosAdd from "./Components/PhotosAdd";
import AdminEvent from "./Pages/Admin/AdminEvent";
import EventEdit from "./Components/EventEdit";
import EventAdd from "./Components/EventAdd";
import AdminStore from "./Pages/Admin/AdminStore";
import StoreItemEdit from "./Components/StoreItemEdit";
import StoreItemAdd from "./Components/StoreItemAdd";
import Items from "./Pages/Items";
import GuestBook from "./Pages/GuestBook";
import AdminGuestBook from "./Pages/Admin/AdminGuestBook";

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
        <Route path="/store/:id" element={<Items/>}/>
        <Route path="/guestbook" element={<GuestBook/>}/>

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
        
        <Route path="/admin/photos" element={<AdminPhotos/>}/>
        <Route path="/admin/photos/edit/:photosId" element={<PhotosEdit/>}/>
        <Route path="/admin/photos/add" element={<PhotosAdd/>}/>

        <Route path="/admin/events" element={<AdminEvent/>}/>
        <Route path="/admin/events/edit/:eventId" element={<EventEdit/>}/>
        <Route path="/admin/events/add" element={<EventAdd/>}/>

        <Route path="/admin/store" element={<AdminStore/>}/>
        <Route path="/admin/store/edit/:storeitemId" element={<StoreItemEdit/>}/>
        <Route path="/admin/store/add" element={<StoreItemAdd/>}/>

        <Route path="/admin/guestbook" element={<AdminGuestBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;