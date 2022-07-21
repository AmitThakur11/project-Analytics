import { addProject, toggleAddProjectForm,getInput,toggleEditProjectForm,editProject} from "../features/project/projectSlice";
import { useDispatch , useSelector } from "react-redux";
import "../styles/CardForm.css";
function CardForm() {
  let dispatch = useDispatch();
  let  {name,budget,endDate} = useSelector((state)=>state.project.input);
  let {addProjectForm,editProjectForm} = useSelector((state)=>state.project.toggle)
  
  const addNewProject =()=>{
      if(name === '' && endDate === '' && budget === 0){
        return alert("Empty field!")
      }
      dispatch(addProject());
      dispatch(toggleAddProjectForm())

  }
  const editingProject =()=>{
    if(name === '' && endDate === '' && budget === 0){
      return alert("Empty field!")
    }
    dispatch(editProject());
    dispatch(toggleEditProjectForm())

}

const takeInput = (e)=>{
  const {name,value} = e.target
  dispatch(getInput({name,value}))
}

  const cancelForm =()=>{
    addProjectForm ? dispatch(toggleAddProjectForm()) : dispatch(toggleEditProjectForm())

  }
  
  return (
    <div className="cardForm">
      <div className="form">
        <section className="cardDetails">
          <div className="cardDetails__items">
            <span>name </span>
            <input name ="name" type="text" value ={name} onChange={(e) => takeInput(e)} />
          </div>
          <div className="cardDetails__items">
            <span>budget </span>
            <input name ="budget" type="number" value={budget} onChange={(e) => takeInput(e)} />
          </div>
          <div className="cardDetails__items">
            <span>end date </span>
            <input name="endDate" value ={endDate} type="date" onChange={(e) => takeInput(e)} />
          </div>
        </section>
        <section className="cardActions">
          {addProjectForm && <button
            onClick={() => addNewProject()}
          >
            Add
          </button>}
          {editProjectForm && <button
            onClick={() => editingProject()}
          >
            Save
          </button>}
         <button onClick={()=>cancelForm()}>Cancel</button>
        </section>
      </div>
    </div>
  );
}

export default CardForm;
