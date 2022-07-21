import React from 'react'
import "../styles/ProjectHeader.css"
import {useSelector,useDispatch} from "react-redux"
import {toggleAddProjectForm} from "../features/project/projectSlice"
function ProjectHeader() {
  const projectList = useSelector((state)=>state.project.value);
  let totalBudget = projectList.reduce((acc,cur)=>acc + cur.budget,0)
  const dispatch = useDispatch()
  return (
    <div className ="projectHeader">
    <p>{`Total Projects = ${projectList.length},Total Budget= ${totalBudget}`}</p>
    <button className='primaryBtn addBtn' onClick={()=>dispatch(toggleAddProjectForm())}>Add Project</button>
    </div>
  )
}

export default ProjectHeader