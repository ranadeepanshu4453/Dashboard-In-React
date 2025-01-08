import Layout from "../../layout/Layout";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function DemoChart() {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Revenue",
        data: [30, 70, 45, 60, 50, 80, 90],
        fill: false,
        backgroundColor: "rgba(255, 99, 132, 1)",
        borderColor: "rgba(255, 99, 132, 0.6)",
        borderWidth: 2,
      },
    ],
  };

  const pieData = {
    labels: [],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales and Revenue Data",
      },
    },
  };

  return (
    <div className="bg-neutral-200 w-full min-h-screen">
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
          {/* Bar Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Bar data={barData} options={options} />
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Line data={lineData} options={options} />
          </div>

          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
            <Pie data={pieData} options={options} />
          </div>
          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
            <Pie data={pieData} options={options} />
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Line data={lineData} options={options} />
          </div>
          {/* Bar Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Bar data={barData} options={options} />
          </div>
          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
            <Pie data={pieData} options={options} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <Line data={lineData} options={options} />
          </div>
          {/* Pie Chart */}
          <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
            <Pie data={pieData} options={options} />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default DemoChart;
