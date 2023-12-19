import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import Home from './home/Home'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Details from './details/Details'

// Todo: Next time you need to install react-router,

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home/>
  },
  {
    path:'/details/:id',
    element: <Details/>
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
