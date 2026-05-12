import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Employee() {
  const result =useLocation();  //or const {state} = ..........
  // console.log(result.state)
  return (
    <div>
      <p className='text-4xl text-blue-950 text-center mb-4'>Employee View mode ON</p>
    <div className='p-16 text-center text-blue-300 bg-blue-900 text-3xl shadow-5xl'>
      <p className='mb-3'>Name : {result.state.name}</p> 
      <p className='mb-3'>Email : {result.state.email}</p>   
      <p className='mb-3'>Mobile : {result.state.mobile}</p>    
      <p className='mb-3'>Designation : {result.state.designation}</p>    
      <p className='mb-3'>CompanyName : {result.state.companyName}</p>    
    </div>
    </div>
  )
}

export default Employee