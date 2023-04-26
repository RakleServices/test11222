// import React, { Component } from 'react';
// import {Navbar, Nav, NavDropdown,Container,} from 'react-bootstrap';
// // import { Route, RouteHandler, Link } from 'react-router';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { FaFilter} from "@react-icons/all-files/fa/FaFilter";
// import { BsArrowRepeat} from "react-icons/bs";
// import { AiOutlineSetting, AiOutlineTag, AiFillFile,AiFillHeart} from "react-icons/ai";
// import { MdOutlineSettingsSuggest,MdOutlineStream} from 'react-icons/md';
// import { FcWorkflow } from 'react-icons/fc';


// export default class Menu extends Component {
//   render() {
//     return(
//       <div className="menutop">
//         <Navbar bg="" expand="lg" className="bgnav">
//       <Container fluid className="headml3">
//         <Navbar.Brand href="#">Livwise</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             // className="me-auto my-2 my-lg-0"
//             // style={{ maxHeight: '100px' }}
//             // navbarScroll
//           >
//             <Nav.Link href="#action1" className="ml-3"><FaFilter /> Filter</Nav.Link>
//             <NavDropdown title="More" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Item1</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//               Item2
//               </NavDropdown.Item>
//             </NavDropdown><NavDropdown title="Settings" id="navbarScrollingDropdown">
//               <NavDropdown.Item  href="/Settings/Generalsettings">
//                <AiOutlineSetting /> General Settings
//                 </NavDropdown.Item>


//               <NavDropdown.Item href="/Settings/Systemsettings">
//               <MdOutlineSettingsSuggest /> System Settings
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Settings/Tagsettings">
//                <AiOutlineTag /> Tag Settings
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action6">
//               <FcWorkflow /> Workflow Settings
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Settings/FileExplorer">
//               <AiFillFile /> File Explorer
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Settings/Systemhealth">
                //  <AiFillFile />System Health
//               </NavDropdown.Item>
//               <NavDropdown.Item href="/Settings/Tagstream">
//               <MdOutlineStream /> Tag Stream
//               </NavDropdown.Item>
//             </NavDropdown><NavDropdown title="Go" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Item1</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//               Item2
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#action2"><BsArrowRepeat /> Restart</Nav.Link>
            
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//       </div>
//     )
//   }
// }





import { FaFilter} from "@react-icons/all-files/fa/FaFilter";
import { BsArrowRepeat} from "react-icons/bs";
import { AiOutlineSetting, AiOutlineTag, AiFillFile,AiFillHeart} from "react-icons/ai";
import { MdOutlineSettingsSuggest,MdOutlineStream} from 'react-icons/md';
import { FcWorkflow } from 'react-icons/fc';
import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
// import logo from '../../img/logo.png';


const Menu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
    <header className="header__middle">
            <div className="row">
                <div className="col-md-12">
                {/* Add Logo  */}

                <div className="header__middle__menus">
                <NavLink exact activeClassName='is-active' to="/" className="logomargin">
                    
                    </NavLink>
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                    {/* <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/Filter`} className="menumargin"><FaFilter />  Filter </NavLink> 
                    </li> */}
                    {/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" className="menumargin"> More <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink to={`/Online`}>Item 1</NavLink> </li>
                            <li><NavLink to={`/Offline`}>Item 2</NavLink> </li>
                        </ul>
                    </li> */}
                    <li onClick={toggleSubmenu} className="menu-item" > 
                    <NavLink className="menumargin" exact to={`/Settings/Systemsettings`}><MdOutlineSettingsSuggest />Settings</NavLink>
                    {/* <Link to="/Settings" className="menumargin"> Settings <FiChevronDown /> </Link>
                        
                        {/* <ul className={boxClassSubMenu.join(' ')} > 
                            {/* <li> <NavLink to={`/Settings/Generalsettings`}><AiOutlineSetting />Devices Settings</NavLink> </li> 
                            <li> </li>
                            {/* <li><NavLink to={`/Settings/Tagsettings`}><AiOutlineTag />GSM/GPRS Settings</NavLink> </li>
                            <li><NavLink to={`/Settings/Workflowsettings`}><FcWorkflow />Ethernet Settings</NavLink> </li>
                            <li><NavLink to={`/Settings/FileExplorer`}> <AiFillFile />FTP Server Settings</NavLink> </li>
                            <li><NavLink to={`/Settings/Systemhealth`}><AiFillHeart/>Add Tag Settings</NavLink> </li>
                            <li><NavLink to={`/Settings/Tagstream`}><MdOutlineStream />Tag Scale Settings</NavLink> </li> 
                        </ul>*/} 
                    </li> 
                    {/* <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#" className="menumargin"> Go <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink to={`/Online`}>Item 1</NavLink> </li>
                            <li><NavLink to={`/Offline`}>Item 2</NavLink> </li>
                        </ul>
                    </li>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/Restart`} className="menumargin"><BsArrowRepeat /> Restart </NavLink> 
                    </li> */}
                    </ul>


                    </nav>     
                </div>   

                </div>
            </div>
    </header>
    )
}

export default Menu
