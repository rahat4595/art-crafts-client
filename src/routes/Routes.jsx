import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AddCraft from "../pages/AddCraft/AddCraft";
import CraftDetails from "../pages/Home/CraftDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('http://localhost:5000/crafts')
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/adds',
          element:<AddCraft></AddCraft>
        },
        {
          path:'craft-details/:id',
          element:<CraftDetails></CraftDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
          
          
        }

      ]
    },
  ]);

  export default router