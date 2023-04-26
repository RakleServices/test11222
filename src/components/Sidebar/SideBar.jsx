import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaCamera, FaMapMarkerAlt, FaUser, FaDatabase, FaMicrochip } from "react-icons/fa";
import { MdSdCardAlert, MdAccountCircle } from "react-icons/md";
import { BiAnalyse, BiLeftArrow, BiSearch } from "react-icons/bi";
import { AiFillControl, AiOutlineLogout, AiOutlineLineChart } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
// import { BiLeftArrow } from "react-icons/bi"
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/maindevices",
    name: "Devices Type",
    icon: <FaMicrochip />,
  },
  {
    path: "/devicesinfo",
    name: "Devices INFO",
    icon: <FaMicrochip />,
  },
  {
    path: "/alotdevices",
    name: "Alot Devices",
    icon: <FaMicrochip />,
  },
  {
    path: "/user",
    name: "Users",
    icon: <FaUser />,
  },
  // {
  //   path: "/setting",
  //   name: "Setting",
  //   icon: <FaBars />,
  // },



  // {
  //   path: "/LogOut",
  //   name: "Log Out",
  //   icon: <AiOutlineLogout />,
  // },
  // {
  //   path: "/ClientDashboard",
  //   name: "Client Dashboard",
  //   icon: <BiAnalyse />,
  // },

];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container" style={{ backgroundColor: "#efefef" }}>
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img src="/images/white-logo.png" alt="logo" />

                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
            <div className="go_back" style={isOpen ? { left: "170px" } : { left: "40px" }} onClick={toggle}><span></span></div>
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;

