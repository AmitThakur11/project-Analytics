import CardLayout from './components/CardLayout';
import ProjectHeader from "./components/ProjectHeader"
import LineChart from "./components/LineChart"
import CardForm from './components/CardForm';
import { useSelector } from 'react-redux';
import './App.css';
function App() {
  const {addProjectForm,editProjectForm}= useSelector((state)=>state.project.toggle)

  return (
    <div className="App">
    <ProjectHeader/>
    <LineChart/>
    {(addProjectForm ||editProjectForm)  && <CardForm/>}
    <CardLayout/>
    </div>
  );
}

export default App;
