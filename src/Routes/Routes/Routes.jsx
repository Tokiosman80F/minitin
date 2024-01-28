import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import AllToys from "../../Pages/AllToys/AllToys";
import SignInForm from "../../Pages/SignInForm/SignInForm";
import SignUpForm from "../../Pages/SignUpForm/SignUpForm";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blogs from "../../Pages/Blogs/Blogs";
import MyToy from "../../Pages/MyToy/MyToy";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/signin",
        element: <SignInForm></SignInForm>,
      },
      {
        path: "/signup",
        element: <SignUpForm></SignUpForm>,
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/my-toy",
        element: (
          <PrivateRoute>
            <MyToy />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
