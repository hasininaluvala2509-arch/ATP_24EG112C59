import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "./components/RootLayout"
import Home from "./components/Home"
import CreateEmp from './components/CreateEmp'
import ListOfEmps from './components/ListOfEmps'
import Employee from './components/Employee'
import EditEmployee from './components/EditEmployee'

function App() {
  //adding router config//
  const routerObj = createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {path:"/",element:<Home />},
        {path:"create-emp",element:<CreateEmp />},
        { path:"list",element:<ListOfEmps />},
        { path:"employe",element:<Employee />},
        {path:"edit-emp",element:<EditEmployee />}
      ]
    }
  ])

  return (
    <RouterProvider router={routerObj} />
  )
}

export default App
//