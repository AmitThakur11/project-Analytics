import React from 'react'
import Card from "./Card"
import "../styles/CardLayout.css"
import {useSelector} from "react-redux"
function CardLayout() {
  const projectList = useSelector((state)=>state.project.value);
  return (
    <>
    <div className ="cardLayout">
    {
        projectList.map((project)=>{
            return <Card project ={project} key ={project.id} />
        })
    }
        </div>
        </>
  )
}

export default CardLayout