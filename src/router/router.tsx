import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Course from "../pages/Course";
import Test from "../pages/Test";
import Profile from "../pages/Profile";
import Students from "../pages/Students";
import AddTest from "../pages/AddTest";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import ProtectedRoute from "../components/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'courses',
                element: <ProtectedRoute>
                    <Courses />
                </ProtectedRoute>
            },
            {
                path: 'course/:grade',
                element: <ProtectedRoute>
                    <Course />
                </ProtectedRoute>
            },
            {
                path: 'test/:id/:grade',
                element: <ProtectedRoute>
                    <Test />
                </ProtectedRoute>
            },
            {
                path: 'profile',
                element: <ProtectedRoute>
                    <Profile />
                </ProtectedRoute>
            },
            {
                path: 'students',
                element: <ProtectedRoute>
                    <Students />
                </ProtectedRoute>
            },
            {
                path: 'add-test/:grade/:sectionId',
                element: <ProtectedRoute>
                    <AddTest />
                </ProtectedRoute>
            },
            {
                path: "sign-in",
                element: <Login />
            },
            {
                path: "sign-up/:user",
                element: <Register />
            },
            {
                path: "add-student",
                element: <ProtectedRoute>
                    <Register />
                </ProtectedRoute>
            }
        ]
    }
])