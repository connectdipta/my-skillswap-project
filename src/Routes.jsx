import { createBrowserRouter } from "react-router-dom";
// Fix: Point to the correct folder './Components/'
import MainLayout from "./Components/MainLayout"; 
// Fix: Point to the correct folder './Pages/'
import Home from "./Pages/Home"; 
import MyProfile from "./Pages/MyProfile";
import UpdateProfile from "./Pages/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        loader: () => fetch('data.json').then(res => res.json()),
        element: <Home></Home>,
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
       {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);

export default router;