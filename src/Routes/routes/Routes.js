import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import PrivateAccess from "../../Pages/Access/PrivateAccess";
import Blog from "../../Pages/Blog/Blog";
import Category from "../../Pages/Category/Category";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/FAQ/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://learn-tech-server.vercel.app/courses')
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) => fetch(`https://learn-tech-server.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element:  <PrivateRoute> <CourseDetails></CourseDetails> </PrivateRoute> ,
                loader: ({params}) => fetch(`https://learn-tech-server.vercel.app/courses/${params.id}`)
            },
            
            {
                path: '*',
                element: 'This page is not found 404'
            }
        ]
    }

])