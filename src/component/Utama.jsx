import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import {HomeComp, AboutComp, InitComp, EventComp, AdvCancerComp, NewsComp, ContactComp} from '../container';
// import HomeComp from '../container/home';

export default function Utama() {
  return (
   <Routes>
       <Route path="/" element={<HomeComp/>}></Route>
       <Route path="/about" element={<AboutComp/>}></Route>
       <Route path="/init" element={<InitComp/>}></Route>
       <Route path="/event" element={<EventComp/>}></Route>
       <Route path="/advcancer" element={<AdvCancerComp/>}></Route>
       <Route path="/news" element={<NewsComp/>}></Route>
       <Route path="/contact" element={<ContactComp/>}></Route>
   </Routes>
  );
}