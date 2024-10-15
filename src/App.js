import "./App.css";
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import DemoChart from "./component/charts/DemoChart";
import Layout from "./layout/Layout";
import Dashboard from "./Dashboard";

function App() {
  const router =createBrowserRouter([
    {
      path:  '/',
      element: <Layout />,
    },{
      path:  '/chart',
      element: <DemoChart />,
    },{
      path:  '/dashboard',
      element: <Dashboard />,
    }
  ]);
  return (
      <div  className="App">
        <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
