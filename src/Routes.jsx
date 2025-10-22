import { createBrowserRouter } from "react-router-dom";
// Fix: Point to the correct folder './Components/'
import MainLayout from "./Components/MainLayout"; 
// Fix: Point to the correct folder './Pages/'
import Home from "./Pages/Home"; 
import MyProfile from "./Pages/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
    ],
  },
]);

export default router;