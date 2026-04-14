import { Outlet } from "react-router-dom"
import EditCounter1 from './EditCounter1'
import EditCounter2 from './EditCounter2'
import EditCounter3 from './EditCounter3'
import EditCounter4 from './EditCounter4'


function AppC() {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 p-5 gap-5 bg-olive-500'>
        <EditCounter1 />
        <EditCounter2 />
        <EditCounter3 />
        <EditCounter4 />

    </div>
  )
}

export default AppC