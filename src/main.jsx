import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SignUpPage from "../Pages/SignUpPage.jsx"
import ChoosAvatarPage from '../Pages/ChoosAvatarPage.jsx'
import ChoosRolePage from "../Pages/ChoosRolePage.jsx"
import Layout from '../Pages/Layout.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Component/Home.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignUpPage/>,
  },
  {
    path:"/AvatarChoose",
    element: <ChoosAvatarPage/>
  },
  {
    path:"/RoleChoos",
    element: <ChoosRolePage/>
  },
  {
    path:"/Home",
    element: <Layout/>,
    children:[
      {
        path:"/Home",
        element:<Home/>
      }
    ]
  },

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
