import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Device from "./pages/Device";
import DeviceConfig from "./pages/DeviceConfig";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import MainDevices from "./pages/MainDevices";
import Alotdevices from "./pages/Alotdevices"
import DeviceInfo from "./pages/DeviceInfo";
import User from "./pages/User";
import Setting from "./pages/Setting";
import Livemap from "./pages/Livemap";
import DeviceNode from "./pages/DeviceNode";

// import Menu from './components/Menu';

function App() {
  const isLogin = sessionStorage.getItem("loggedIn");
  return (

    <Router>
      {isLogin ? <Routes><Route path="*" element={<Login />} /></Routes> :
      <SideBar>
        <Routes>
          <Route path="/" element={<Device />} />
          <Route path="/deviceData" element={<DeviceConfig />} />
          <Route path="/maindevices" element={<MainDevices />} />
          <Route path="/devicesinfo" element={<DeviceInfo />} />
          <Route path="/alotdevices" element={<Alotdevices/>}/>
          <Route path="/user" element={<User />} />
          <Route path="/devicenode" element={<DeviceNode />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/livemap" element={<Livemap />} />
          
          <Route path="/LogOut" element={<Logout />} />
          <Route path="*" location="/" />
        </Routes>
      </SideBar>
      }
      {/* } */}
    </Router>



  );


}



export default App;
