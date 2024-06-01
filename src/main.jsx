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
import CreatePost from "./page/CreatePost.jsx";
import Post from "./page/Post.jsx";
import CreateReview from "./page/CreateReview.jsx";
import CreateTeam from "./page/CreateTeam.jsx";
import Review from "./page/Review.jsx";
import Team from "./page/Team.jsx";
import Join from "./page/Join.jsx";


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
        ],
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/reviews", element: <Reviews/> }
        ],
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/reviews/review", element: <Review/> }
        ],
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
            {path : "/teams/team", element: <Team/> }
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
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/login/join", element: <Join/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/posts/create-post", element: <CreatePost/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/posts/post", element: <Post/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/reviews/create-review", element: <CreateReview/> }
        ]
    },
    {
        path: "/",
        element: <App/>,
        errorElement: <NotFound404/>,
        children: [
            {path : "/teams/create-team", element: <CreateTeam/> }
        ]
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
