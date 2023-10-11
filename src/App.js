import React from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter, redirect } from 'react-router-dom'


import Layout from'./Components/Layout/Layout'
import Home from'./Components/Home/Home'
import About from'./Components/About/About'
import Contact from'./Components/Contact/Contact'
import Notfound from'./Components/Notfound/Notfound'
import Portfolio from './Components/Portfolio/Portfolio'

let routers=createHashRouter(


    [
  
  {path:"", element:(<Layout /> ) ,
  
  
  children:
  
        [
            {index:true, loader:()=> redirect ("home")    },
            {path:'home', element:<Home/>  }   ,
          {path:'about',element:<About/>},
          {path:'protfolio',element:<Portfolio/>},
          {path:'contact',element:<Contact/>},
          {path:'*',element:<Notfound/>},

      ]
    
     }
]
)



export default  function App() {
  return  <>
               <RouterProvider router={routers}></RouterProvider>
    </>
  
}
