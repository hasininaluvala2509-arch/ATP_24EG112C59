import {NavLink} from 'react-router'

function Header() {
  return (
    <div className='flex gap-6 justify-end text-3xl p-7 bg-blue-150'>
        <NavLink to="/" className={({isActive})=>isActive?"text-blue-950":""}>Home</NavLink>
        <NavLink to="create-emp" className={({isActive})=>isActive?"text-blue-950":""}>CreateEmp</NavLink>
        <NavLink to="list" className={({isActive})=>isActive?"text-blue-950":""}>Employees</NavLink>
    </div>
  )
}

export default Header
//