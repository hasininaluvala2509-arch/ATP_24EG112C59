import { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form'
import { useLocation,useNavigate } from 'react-router-dom';
import axios from 'axios'

function EditEmployee() {
    const {register,handleSubmit,formState: { errors },setValue} = useForm();
  

    const { state } = useLocation()
    console.log(state);
    const navigate=useNavigate()

    useEffect(()=>{
      setValue("name", state.name),
      setValue("email", state.email),
      setValue("mobile", state.mobile),
      setValue("designation", state.designation),
      setValue("companyName", state.companyName)
    },[])

    const saveModifiedEmp=async(modifiedEmp)=>{
      console.log(modifiedEmp)
      //make http put req
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5500"
      const res= await axios.put(`${apiBaseUrl}/emp/employee/${state._id}`,modifiedEmp)
      
      if(res.status===200){
        //navigate to list of employess
        navigate("/list")
      }
      }

  return (
    <div>
      <p className='text-4xl text-blue-950 text-center mb-4'>Edit View Mode ON</p>
      <div className='p-10'>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(saveModifiedEmp)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3  border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl text-blue-200 bg-blue-950 block mx-auto p-4 mb-10">
          Save Emp
        </button>
      </form>
    </div>
    </div>
  )
}

export default EditEmployee