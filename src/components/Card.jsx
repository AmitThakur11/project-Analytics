import React from "react";
import "../styles/Card.css";
import {useDispatch} from "react-redux";
import {copyProject, deleteProject,toggleEditProjectForm} from "../features/project/projectSlice"

function Cards({project}) {
  const dispatch = useDispatch()
  return (
    <div className="card">
      <section className="cardDetails">
        <div className="cardDetail__items">
          <p>Name</p>
          <p>{project.name}</p>
        </div>
        <div className="cardDetail__items">
          <p>Budget</p>
          <p>{project.budget}</p>
        </div>
        <div className="cardDetail__items">
          <p>End Date</p>
          <p className="date">{project.endDate}</p>
        </div>
      </section>
      <section className="cardActions">
        <button onClick = {()=>dispatch(toggleEditProjectForm(project))}>Edit Card</button>
        <button onClick={()=>dispatch(deleteProject(project.id))}>Delete Card</button>
        <button onClick={()=>dispatch(copyProject(project))}>Copy Card</button>

      </section>
    </div>
  );
}

export default Cards;
