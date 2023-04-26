// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// import Tabs from 'react-bootstrap/Tabs';
// import Tab from 'react-bootstrap/Tab';
// import Table from 'react-bootstrap/Table';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import SplitButton from 'react-bootstrap/SplitButton';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Dropdown from 'react-bootstrap/Dropdown';



  
// export default function App() {
//   return (
//     <div style={{ display: 'block',}} className="maindash">
// <div className="row mb-3">
    // <div className="col-md-6 ddvtv">
    // <label class="lbv clr">Birla Corporation</label> 
    // <label class="lbv mx-2"><i class="fa fa-map-marker"></i> Lucknow</label>
    //       {[DropdownButton].map((DropdownType, idx) => (
    //         <DropdownType
    //           as={ButtonGroup}
    //           key={idx}
    //           id={`dropdown-button-drop-${idx}`}
    //           size="lg"
    //           title="CCW - l Unit & ll CM"
    //         >
    //           <Dropdown.Item eventKey="1">Item1</Dropdown.Item>
    //           <Dropdown.Item eventKey="2">Item2</Dropdown.Item>
    //           <Dropdown.Item eventKey="3">Item3</Dropdown.Item>
             
    //         </DropdownType>
    //       ))}
      
    //   </div>
     

//       <div className="col-md-6 dtv"> 
//       <label className="lbv">Pollutant(s)</label>
      
//           {[DropdownButton].map((DropdownType, idx) => (
//             <DropdownType
//               as={ButtonGroup}
//               key={idx}
//               id={`dropdown-button-drop-${idx}`}
//               size="md"
//               title="All"
//             >
//               <Dropdown.Item eventKey="1">Item1</Dropdown.Item>
//               <Dropdown.Item eventKey="2">Item2</Dropdown.Item>
//               <Dropdown.Item eventKey="3">Item3</Dropdown.Item>
//             </DropdownType>
//           ))}
       
      
//           {[DropdownButton].map((DropdownType, idx) => (
//             <DropdownType
//               as={ButtonGroup}
//               key={idx}
//               id={`dropdown-button-drop-${idx}`}
//               size="md"
//               title="Today"
//             >
//               <Dropdown.Item eventKey="1">1</Dropdown.Item>
//               <Dropdown.Item eventKey="2">2</Dropdown.Item>
//               <Dropdown.Item eventKey="3">3</Dropdown.Item>
             
//             </DropdownType>
//           ))}
       
//           {[DropdownButton].map((DropdownType, idx) => (
//             <DropdownType
//               as={ButtonGroup}
//               key={idx}
//               id={`dropdown-button-drop-${idx}`}
//               size="md"
//               title="Drop"
//             >
//               <Dropdown.Item eventKey="1">Item1</Dropdown.Item>
//               <Dropdown.Item eventKey="2">Item2</Dropdown.Item>
//               <Dropdown.Item eventKey="3">Item3</Dropdown.Item>
//             </DropdownType>
//           ))}
//         </div>
//         </div>

//         <Tabs defaultActiveKey="first">
//               <Tab eventKey="first" title="Dashboard" >
//                   <div className='dashtab'> 
//                     <Table className='tabledash'>
//                         <tr className="hdv">
//                           <th>Username</th>
//                         </tr>
//                         <tr>
//                           <th>Jacob</th>
//                           <th>Thornton</th>
//                           <th>@fat</th>
//                         </tr>
//                         <tr>
//                           <td>3</td>
//                           <td>Larry</td>
//                           <td>@twitter</td>
//                         </tr>
//                     </Table>
//                     <Table  className='tabledash'>
//                         <tr className="hdv">
//                           <th>Username</th>
//                         </tr>
//                         <tr>
//                           <th>Jacob</th>
//                           <th>Thornton</th>
//                           <th>@fat</th>
//                         </tr>
//                         <tr>
//                           <td>3</td>
//                           <td>Larry</td>
//                           <td>@twitter</td>
//                         </tr>
//                     </Table>
//                     <Table  className='tabledash'>
//                         <tr className="hdv">
//                           <th>Username</th>
//                         </tr>
//                         <tr>
//                           <th>Jacob</th>
//                           <th>Thornton</th>
//                           <th>@fat</th>
//                         </tr>
//                         <tr>
//                           <td>3</td>
//                           <td>Larry</td>
//                           <td>@twitter</td>
//                         </tr>
//                     </Table>
//                     <Table className='tabledash'>
//                         <tr className="hdv">
//                           <th>Username</th>
//                         </tr>
//                         <tr>
//                           <th>Jacob</th>
//                           <th>Thornton</th>
//                           <th>@fat</th>
//                         </tr>
//                         <tr>
//                           <td>3</td>
//                           <td>Larry</td>
//                           <td>@twitter</td>
//                         </tr>
//                     </Table>
//                     <Table className='tabledash'>
//                         <tr className="hdv">
//                           <th>Username</th>
//                         </tr>
//                         <tr>
//                           <th>Jacob</th>
//                           <th>Thornton</th>
//                           <th>@fat</th>
//                         </tr>
//                         <tr>
//                           <td>3</td>
//                           <td>Larry</td>
//                           <td>@twitter</td>
//                         </tr>
//                     </Table>
                    
//                 </div>
//               </Tab>
//             <Tab eventKey="second" title="Data">
//              Hii, I am 2nd tab content
//             </Tab>
//            <Tab eventKey="third" title="Tag Stream">
//               Hii, I am 3rd tab content
//         </Tab>
//         <Tab eventKey="forth" title="Alearts">
//               Hii, I am 4rd tab content
//         </Tab>
//       </Tabs>
//     </div>
//   );
// }




// import Menu from '../components/Menu';

import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';




export default function App() {    return  <div style={{ display: 'block',}} className="maindev">


  
  {/* <Menu /> */}
    <div className="row mb-3 tbussz">
          <div className="col-md-12"> 
          <label className="lbv">Industry</label>
          
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="md"
                  title="All"
                >
                  <Dropdown.Item eventKey="1">Item1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Item2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Item3</Dropdown.Item>
                </DropdownType>
              ))}
           
           <label className="lbv">Serial</label>
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="md"
                  title="All"
                >
                  <Dropdown.Item eventKey="1">1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">3</Dropdown.Item>
                 
                </DropdownType>
              ))}
           <label className="lbv">Device Type</label>
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="md"
                  title="All"
                >
                  <Dropdown.Item eventKey="1">Item1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Item2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Item3</Dropdown.Item>
                </DropdownType>
              ))}
              <label className="lbv">Status</label>
              {[DropdownButton].map((DropdownType, idx) => (
                <DropdownType
                  as={ButtonGroup}
                  key={idx}
                  id={`dropdown-button-drop-${idx}`}
                  size="md"
                  title="All"
                >
                  <Dropdown.Item eventKey="1">Item1</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Item2</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Item3</Dropdown.Item>
                </DropdownType>
              ))}
            </div>
            </div>

            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Table striped bordered hover responsive="md">
                            <thead>
                                <tr>
                                    <th>Serial No</th>
                                    <th>Industry</th>
                                    <th>Site</th>
                                    <th>Link</th>
                                    <th>Device Type</th>
                                    <th>Fireware</th>
                                    <th>Status</th>
                                    <th>Meta</th>
                                    <th>Timestamp</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td>569745236</td>
                                    <td>Birla Corporation LTD</td>
                                    <td>BCL - Power Plant</td>
                                    <td><i class="fa fa-external-link"></i></td>
                                    <td>LOGPRO env4</td>
                                    <td>1.2.8.0</td>
                                    <td> <div className='bg-danger clrbg'><i class="fa fa-link"></i> Disconnected</div></td>
                                    <td><div className='bg-success clrbg'>TC</div></td>
                                    <td>18-Oct-2020 17:21:25</td>
                                </tr>
                                <tr>
                                    <td>569745236</td>
                                    <td>Birla Corporation LTD</td>
                                    <td>BCL - Power Plant</td>
                                    <td><i class="fa fa-external-link"></i></td>
                                    <td>LOGPRO env4</td>
                                    <td>1.2.8.0</td>
                                    <td><div className='bg-success clrbg'><i class="fa fa-link"></i> Disconnected</div></td>
                                    <td><div className='bg-success clrbg'>TC</div></td>
                                    <td>18-Oct-2020 17:21:25</td>
                                </tr>
                                <tr>
                                    <td>569745236</td>
                                    <td>Birla Corporation LTD</td>
                                    <td>BCL - Power Plant</td>
                                    <td><i class="fa fa-external-link"></i></td>
                                    <td>LOGPRO env4</td>
                                    <td>1.2.8.0</td>
                                    <td><div className='bg-danger clrbg'><i class="fa fa-link"></i> Disconnected</div></td>
                                    <td><div className='bg-success clrbg'>TC</div></td>
                                    <td>18-Oct-2020 17:21:25</td>
                                </tr>
                            </tbody>
                        </Table> 
                    </div>
                </div>
            </div>


   {/* <div className='szdv'>
     <Table striped bordered hover className='devicetable'>
       <tr>
      <th colspan="2">Serial</th>
      <th colspan="3">Industry</th>
      <th colspan="3">Site</th>
      <th>Link</th>
      <th>Device Type</th>
      <th>Fireware</th>
      <th>Status</th>
      <th>Meta</th>
      <th>Timestamp</th>
    </tr>
    <tr>
      <td colspan="3">569745236</td>
      <td colspan="3">Birla Corporation LTD</td>
      <td colspan="3">BCL - Power Plant</td>
      <td>@</td>
      <td>LOGPRO env4</td>
      <td>1.2.8.0</td>
      <td>Disconnected</td>
      <td>TC</td>
      <td>18-Oct-2020 17:21:25</td>
    </tr>
</Table>
  </div> */}


</div>
  };
  
  

// const Camerastatus = () => {
//   return <div className="title">Camera Status</div>;
// };

// export default Camerastatus;


