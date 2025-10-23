import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout"; 
import Home from "./Pages/Home"; 
import MyProfile from "./Pages/MyProfile";
import UpdateProfile from "./Pages/UpdateProfile";
import InstructorDetails from "./Pages/InstructorDetails";
import ErrorPage from "./Components/ErrorPage";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgetPassword";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('data.json').then(res => res.json()),
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>,
      },
       {
            path: '/instructor/:id',
            loader: () => fetch('data.json').then(res => res.json()),
            element: <InstructorDetails></InstructorDetails>,
            errorElement: <ErrorPage></ErrorPage>,
        },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
        errorElement: <ErrorPage></ErrorPage>,
      },
       {
        path: "/update-profile",
        element: <UpdateProfile></UpdateProfile>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
        errorElement: <ErrorPage></ErrorPage>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
        errorElement: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;