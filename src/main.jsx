import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MainPage from "./page/MainPage.jsx";
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound404 from "./page/error/NotFound404.jsx";
import Posts from "./page/Posts.jsx";
import Reviews from "./page/Reviews.jsx";
import Teams from "./page/Teams.jsx";
import Login from "./page/Login.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/", element: <MainPage/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/posts", element: <Posts/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/reviews", element: <Reviews/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/teams", element: <Teams/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/login", element: <Login/> }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
