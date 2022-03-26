import React from "react";
// note that NavLink passes isActive directly does not need alternative settings
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";
// import { isAuth, signout } from "../auth/helpers";
import { IoMap } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import {
  AiFillSetting,
  AiFillControl,
  AiFillHome,
  AiOutlineLogout,
  AiOutlineEdit,
} from "react-icons/ai";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const nav = () => (
    <div className="row">
      <div className="col-md-12">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-warning nav-link active"
                    : "text-light nav-link"
                }
                to="/"
              >
                <AiFillHome />
                Home
              </NavLink>

              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/mark"
                >
                  <IoMap />
                  Mark
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/editmark"
                >
                  <AiOutlineEdit />
                  Edit your Mark
                </NavLink>
              </>
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/admin/alert"
                >
                  Alert
                </NavLink>
              </>
            </Nav>

            <Nav className="mx-auto">
              <Navbar.Brand href="#home">Ukraine Solidarity</Navbar.Brand>
            </Nav>

            <Nav className="ml-auto">
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/signin"
                >
                  Signin
                </NavLink>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/signup"
                >
                  Signup
                </NavLink>
              </>
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/profile"
                >
                  <FaUser /> Fred
                </NavLink>
              </>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/admin_profile"
                >
                  <FaUser /> Jack
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-warning nav-link active"
                      : "text-light nav-link"
                  }
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ cursor: "pointer", color: "#fff" }}
                  onClick={() => {
                    console.log("clcik");
                  }}
                >
                  <AiOutlineLogout /> Signout
                </span>
              </li>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
  return (
    <>
      {nav()}
      <div>{children}</div>
    </>
  );
};

export default Layout;
