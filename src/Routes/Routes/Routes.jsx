import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout/MainLayout";
import Home from "../../Pages/Home/Home";
import AllToys from "../../Pages/AllToys/AllToys";
import SignInForm from "../../Pages/SignInForm/SignInForm";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/all-toys",
                element:<AllToys></AllToys>
            },
            {
                path:'/signin',
                element:<SignInForm></SignInForm>
            }
        ]
    }
])