import { useForm } from "react-hook-form";
import { useState } from "react";
function FormDemo1(){
    const {register, handleSubmit, formState:{errors}}=useForm();
    const [users,setUsers]=useState([]);
    const onFormSubmit=(obj)=>{
        console.log(obj)
        setUsers([...users,obj])
    }
    return(
        <div>
            <h1 className="text-center">Create User Form</h1>
            <form className="mx-auto text-center" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mx-auto text-center">
                    <label htmlFor="firstname">firstname: </label>
                    <input type="text" id="username" className="border"{...register("firstname",{required:"firstname is required"})} />
                    {errors.firstname?.type==="required" && <p>firstname is required</p>}
                </div>
                <div className="mx-auto text-center">
                    <label htmlFor="email">Email: </label>
                    <input type="email" id="email" className="border"{...register("email",{required:"email is required"})} />
                    {errors.email?.type==="required" && <p>email is required</p>}
                </div>
                <div className="mx-auto text-center">
                    <label htmlFor="dob">DOB: </label>
                    <input type="date" id="dob" className="border"{...register("dob")} />
                </div>
                <button type="submit" className="text-red-600 text-center">ADD USER</button>
            </form>
            <div>
                <h2>User List</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Dob</td>
                        </tr>
                    </thead>
                    <tbody>
                     {users.map((users,index)=>(
                        <tr key={index}>
                            <td>{users.firstname}</td>
                            <td>{users.email}</td>
                            <td>{users.dob}</td>

                        </tr>
                     ))}
                    </tbody>
                </table>
            </div>
        </div>
      )}
export default FormDemo1;
