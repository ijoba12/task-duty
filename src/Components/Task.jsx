import React from "react";
import plus from "../assets/plus.png";
import '../Style/Task.css'
import text from "../assets/text.png";
import trash from "../assets/trash.png";
import { Link } from "react-router-dom";
const Task = () => {
  return (
    <main className="container">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <h1 className="h1-task">My Tasks</h1>
        <Link to={'/NewTask'} className="text-decoration-none">
          <p className=" text-end">
            <img src={plus} alt="" className="pe-2 mb-1" />
            Add New Task
          </p>
        </Link>
      </div>
      {/* -------------------------------Task 1----------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-urgent">Urgent</p>
          <div className="d-flex gap-3">
            <Link to={"/EditTask"}>
              <button className="btn-task">
                <img src={text} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={trash} alt="trash" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>FinTech Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* ---------------------------------Task 2----------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-Important">Important</p>
          <div className="d-flex gap-3">
            <Link to={"/EditTask"}>
              <button className="btn-task">
                <img src={text} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={trash} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>Agro Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* ------------------------------------Task 3--------------------------------------- */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-urgent">Urgent</p>
          <div className="d-flex gap-3">
            <Link to={"/EditTask"}>
              <button className="btn-task">
                <img src={text} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={trash} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>FinTech Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      {/* --------------------------------------Task 3------------------------------------------ */}
      <div className="border border border-3 p-4 rounded-4 my-5">
        <div className="d-flex justify-content-between align-items-center">
          <p className="p-taks-Important">Important</p>
          <div className="d-flex gap-3">
            <Link to={"/EditTask"}>
              <button className="btn-task">
                <img src={text} alt="" className="img-task me-2" />
                Edit
              </button>
            </Link>
            <button className="btn-task-del">
              <img src={trash} alt="" className="img-task me-2" />
              Delete
            </button>
          </div>
        </div>
        <hr />
        <h3>Agro Website Update</h3>
        <p className="p-task">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet quis
          nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam
          faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget
          tellus suspendisse et viverra.
        </p>
      </div>
      <p className="text-center ">
        <Link className="back-to-top" to={"/Task"}>
          Back To Top
        </Link>
      </p>
    </main>
  );
};

export default Task;