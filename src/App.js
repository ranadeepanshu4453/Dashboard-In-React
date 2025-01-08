import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DemoChart from "./component/charts/DemoChart";
import Dashboard from "./Dashboard";
import Members from "./component/Users/Members/Members";
import Trainer from "./component/Users/trainers/Trainer";
import Leads from "./component/Users/leads/Leads";
import DeletedMembers from "./component/Users/deleted members/DeletedMembers";
import Staff from "./component/Users/staff/Staff";
import ManagePT from "./component/ManagePT/ManagePT";
import Branches from "./component/Branches/Branches";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/chart",
      element: <DemoChart />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/members",
      element: <Members />,
    },
    {
      path: "/trainers",
      element: <Trainer />,
    },
    {
      path: "/leads",
      element: <Leads />,
    },
    {
      path: "/deleted-members",
      element: <DeletedMembers />,
    },
    {
      path: "/staff",
      element: <Staff />,
    },
    {
      path: "/managePT",
      element: <ManagePT />,
    },
    {
      path: "/branches",
      element: <Branches />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
