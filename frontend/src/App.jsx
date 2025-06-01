import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Blogs from './pages/Blogs'
import About from './pages/About'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import CreateBlog from './pages/CreateBlog'
import YourBlog from './pages/YourBlog'
import Comments from './pages/Comments'
import Profile from './pages/Profile'
import UpdateBlog from './pages/UpdateBlog'


const router= createBrowserRouter([
  {
    path:"/",
    element:<><Navbar/><Home/></>
  },
  {
    path:"/blogs",
    element:<><Navbar/><Blogs/></>
  },
  {
    path:"/about",
    element:<><Navbar/><About/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/signup",
    element:<><Navbar/><Signup/></>
  },
  {
    path:"/dashboard",
    element:<><Navbar/><Dashboard/></>,
    children:[
      {
        path: "write-blog",
        element:<><CreateBlog/></>
      },
      {
        path: "write-blog/:blogId",
        element: <><UpdateBlog /></>
      },
      {
        path: "your-blog",
        element:<YourBlog/>
      },
      {
        path: "comments",
        element:<Comments/>
      },
      {
        path: "profile",
        element:<Profile/>
      },
      
      
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App