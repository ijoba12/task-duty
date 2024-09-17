import React from "react";
import bro from "../assets/bro.png";
import '../Style/Home.css'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main>
        <div className="container d-lg-flex align-items-center main justify-content-center">
          <div className="container d-flex row gap-3 py-lg-3  ">
            <h2>Manage your Tasks on <span>TaskDuty</span></h2>
            <p className="p-home">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
              tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at
              platea tempus duis non eget. Hendrerit tortor fermentum bibendum
              mi nisl semper porttitor. Nec accumsan.
            </p>
            <Link to={'/Task'}>
            <button className="btn btn-home btn-dark btn-lg">Go to My Tasks</button>
            </Link>
          </div>
          <div>
            <img src={bro} alt="bro" className="bro-img"/>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;