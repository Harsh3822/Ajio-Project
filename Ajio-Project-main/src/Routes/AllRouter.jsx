import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Errorpage from '../Pages/Errorpage';
import Men from '../Pages/Men';
import Women from '../Pages/Women';
import Kids from '../Pages/Kids';
import Beauty from '../Pages/Beauty';
import Homekitchen from '../Pages/Homekitchen';
import Home from '../Pages/Home';
import Slider7 from '../Pages/Slider7';
import MenShirt from '../Pages/MenShirt';
import MenPant from '../Pages/MenPant';
import MenTshirt from '../Pages/MenTshirt';
import WomenKurtas from '../Pages/WomenKurtas';
import WomenTshirt from '../Pages/WomenTshirt';
import WomenSarees from '../Pages/WomenSarees';
import KidsTops from '../Pages/KidsTops';
import KidsBags from '../Pages/KidsBags';
import KidsJacket from '../Pages/KidsJacket';
import FaceWash from '../Pages/FaceWash';
import Perfumes from '../Pages/Perfumes';
import Shampoo from '../Pages/Shampoo';
import WallDecor from '../Pages/WallDecor';
import Photoframes from '../Pages/Photoframes';
import Kitchens from '../Pages/Kitchens';
import Description from '../Pages/Description';
import Privatepage from '../Pages/Privatepage';
import Login from '../Components/Login';

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path="/men" element={<Privatepage><Men /></Privatepage> } />
        <Route path="/men/shirts" element={<MenShirt />} />
        <Route path="/men/pants" element={<MenPant />} />
        <Route path="/men/t-shirts" element={<MenTshirt />} />
        <Route path="/women" element={<Women />} />
        <Route path="/women/kurtas" element={<WomenKurtas />} />
        <Route path="/women/t-shirts" element={<WomenTshirt />} />
        <Route path="/women/sarees" element={<WomenSarees />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/kids/tops" element={<KidsTops />} />
        <Route path="/kids/bags" element={<KidsBags />} />
        <Route path="/kids/jackets" element={<KidsJacket />} /> 
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/beauty/face-wash" element={<FaceWash />} />
        <Route path="/beauty/perfumes" element={<Perfumes />} />
        <Route path="/beauty/shampoo" element={<Shampoo />} />
        <Route path="/homeandkitchen" element={<Homekitchen />} />
        <Route path="/homeandkitchen/wall-decor" element={<WallDecor />} />
        <Route path="/homeandkitchen/photoframes" element={<Photoframes />} />
        <Route path="/homeandkitchen/kitchens" element={<Kitchens />} />
        <Route path="/description/:id" element={<Description />}/>
        <Route path="*" element={<Errorpage />} />
        <Route path="/toppicks" element={<Slider7 />} />
      </Routes>
    </div>
  );
};

export default AllRouter;
