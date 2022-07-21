import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "../styles/lineChart.css";
import { useSelector} from "react-redux";

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);
function LineChart() {
  const projectList = useSelector((state) => state.project.value);
  const getDataArray = (name) =>
    projectList.reduce((acc, curr) => {
      return [...acc, curr[name]];
    }, []);
  const getAvgData = () => {
    
    let avgArray = [];
    for (let i = 0; i < projectList.length; i++) {
      if (!projectList[i + 1]) {
        return avgArray;
      }
      let avg = (parseInt(projectList[i].budget,10) + parseInt(projectList[i + 1].budget,10)) / 2;
      avgArray.push(avg);
    }
  };
  

  const data = {
    labels: [null,...getDataArray("name")],
    datasets: [
      {
        label: "First Dataset",
        data: [null,...getDataArray("budget")],
        backgroundColor: "#60a5fa",
        borderColor: "#60a5fa",
      },
      {
        label: "Second Dataset",
        data: [null,null,...getAvgData()],
        borderDash: [10, 3],
        backgroundColor: "#60a5fa",
        borderColor: "#93c5fd",
      },
    ],
  };
  return (
    <div className="chart">
      <Line
        data={data}
        options={{
          scales: {
            y: {
              min: 0,
            }
          },
        }}
      ></Line>
      
    </div>
  );
}

export default LineChart;
