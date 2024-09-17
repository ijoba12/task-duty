import React, { useState } from "react";
import navLogo from "../assets/navLogo.png";
import navImage from "../assets/navImage.png";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import menuImg from "../assets/menu-image.svg";
import Alert  from "react-bootstrap/Alert";
import '../Style/Navbar.css';

const Navbar = () => {
  const[show,setShow] = useState(false);
  const handleClose =() => setShow(false);
  const handleShow =() => setShow(true);
  return (
    <>
      <nav className="container d-flex  justify-content-between">
        <div className="d-flex gap-2 align-item-center justify-content-center">
          <li className="list-unstyled align-item-center">
            {" "}
            <Link to="/">
              <img className="mt-3" src={navLogo} alt="nav-logo" />
            </Link>{" "}
          </li>
          <h2>TaskDuty</h2>
        </div>
        <ul className="d-lg-flex d-none list-unstyled py-2  gap-5 align-items-center">
          <li className="">
            {" "}
            <Link className="nav-text text-decoration-none" to="/NewTask"> New Task </Link>{" "}
          </li>
          <li className="">
            {" "}
            <Link className="nav-text text-decoration-none" to="/Task"> All Tasks </Link>{" "}
          </li>
          <img src={navImage} alt="" />
        </ul>
        <div className="d-md-block d-lg-none mt-2">
          <div className="d-lg-none" onClick={handleShow}>
            <img className="menu-img" src={menuImg} alt="menu-img" />
          </div>

          <Alert variant="info" className="d-none d-lg-block">
            Resize your browser to show the responsive offcanvas toggle.
          </Alert>

          <Offcanvas show={show} onHide={handleClose} responsive="lg">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p className="mb-0">
                <ul className="d-flex row list-unstyled py-2  gap-5 align-items-center">
                  <li>
                    {" "}
                    <Link className="nav-text text-decoration-none" to="/NewTask"> New Task </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link className="nav-text text-decoration-none" to="/Task"> All Tasks </Link>{" "}
                  </li>
                  <img className="icon-lady" src={navImage} alt="" />
                </ul>
                {/* This is content within an <code>.offcanvas-lg</code>. */}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
