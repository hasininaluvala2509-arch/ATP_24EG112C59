import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppC from './components/AppC'
import ContextProvider from "./context/CounterContext"

function App() {
    const routerObj = createBrowserRouter([
        {
            path:'/',
            element:<AppC />
        }
    ])
  return (
    <ContextProvider>
    <RouterProvider router={routerObj}/>
    </ContextProvider>

  )
}

export default App