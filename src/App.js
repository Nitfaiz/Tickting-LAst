import { Route, Routes } from "react-router-dom";
import './App.css';
import Firstpage from './Components/Firstpage';
import Secondpage from './Components/Secondpage';
import Thirdpage from "./Components/Thirdpage";
import Getstarted from "./Components/Getstarted";
import Dashboard from "./Components/Dashboard";
import Newmodal from "./Components/Newmodal";
import Newdashboard from "./Components/Newdashboard";
import ReactSideBar from "./Components/ReactSideBar";
import NavBar from "./Components/NavBar";
import DefaultDashboard from "./Components/DefaultDashboard";
import Recomamendent from "./Components/Recomamendent";
import Tickets from "./Components/Tickets";
import DemoCompo from "./Components/DemoCompo";
import SocialSupport from "./Components/SocialSupport";
import Solutions from "./Components/Solutions";



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Firstpage />} />
        <Route path='/Secondpage' element={<Secondpage />} />
        <Route path='/thirdpage' element={<Thirdpage />} />
        <Route path='/getstarted' element={<Getstarted />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/newmodal' element={<Newmodal />} />
        <Route path='/newdashboard' element={<Newdashboard />} />
        <Route path='/sidebar' element={<ReactSideBar />} />
        <Route path='/navbar' element={<NavBar />} />
        <Route path='/dashboard/default' element={<DefaultDashboard />} />
        <Route path='/recomandedfeatures' element={<Recomamendent />} />
        <Route path='/dashboard/tickets' element={<Tickets />} />
        <Route path='/demo' element={<DemoCompo />} />
        <Route path='/socialsupport' element={<SocialSupport />} />
        <Route path='/solutions' element={<Solutions />} />






        recomandedfeatures

      </Routes>
    </>
  );
}

export default App;
