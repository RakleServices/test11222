
// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
// import './tags.css'
// import Tagtable from './tagtable';
// import Systemsettings from './Systemsettings.jsx';
// import DeviceDataTable from './DeviceDataTable';
// import {  } from '../api';
// import Header from './Header';
// import Footer from './Footer';
// import { FaList, } from 'react-icons/fa';
// import { FiGrid } from 'react-icons/fi';
// export default function DeviceConfig() {
//   const [searchParams] = useSearchParams();
//   const [device, setDevice] = useState({});
//   const [listgrid, setlistgrid] = useState('list');
//   const [view, setview] = useState(false);
//   useEffect(() => {
//     let deviceId = searchParams.get('deviceId')
//     console.log("Device :: ", deviceId);
//     GetDevice(deviceId).then(res => {
//       if (res && res.data) {
//         setDevice(res.data);
//       }
//     })
//   }, []);
//   return (
//     <div style={{ display: 'block' }} className="maindash ">
//       <Header />
//       <div className="row my-3 mct-content">
//         <div className='col-md-3'><b>Device ID :</b> {device.deviceId}</div>
//         <div className='col-md-3'><b>Device Name : </b>{device.name}</div>
//         <div className='col-md-3'><b>Device Type : </b>{device.deviceType}</div>

//       </div>
//       <div className='col-md-12'>
//         <div className="row">
//           <div className="col-md-12">
//             <Tabs defaultActiveKey="data">
//               <Tab eventKey="data" title="Data">
//                 <DeviceDataTable device={device} listgrid={view} />
//               </Tab>
//               <Tab eventKey="tag" title="Tags">


//                 <Tagtable device={device} />

//               </Tab>
//               <Tab eventKey="setting" title="Settings">
//                 <Systemsettings device={device} listgrid={listgrid} />
//               </Tab>



//             </Tabs >

//           </div>
//           <div className="list-tab">
//             {
//               view === true ? <>
//                 <h5 onClick={() => setview(false)} style={{ textAlign: "right" }}><FaList /></h5>
//               </> : <><h5 onClick={() => setview(true)} style={{ textAlign: "right" }}><FiGrid /></h5></>
//             }
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div >
//   );
// }
