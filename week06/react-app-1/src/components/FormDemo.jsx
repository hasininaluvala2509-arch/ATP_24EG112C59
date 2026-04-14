// import {useForm} from 'react-hook-form'

// function FormDemo(){

//     const {register //to register form fields
//         ,handleSubmit,formState:{errors}}=useForm();
//     //form submit function
//     const onFormSubmit=(obj)=>{
//         console.log(obj);
//     };
//     // console.log(errors)

//     return(
//         <div>
//             <h1 className="text-center text-5xl">Form demo</h1>
//             {/* form */}
//             <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
//                 <div className='mb-3'>
//                     <label htmlFor="username">Username</label>
//                     <input type="text" {...register("username"),{required:"Username is required",minLength:5}}
//                      id="username" className="mx-auto border w-5 p-3" />
//                      {errors.username?.type=="required" && <p>Username is required</p>}
//                 </div>
//                 {/* email */}
//                 <div className='mb-3'>
//                     <label htmlFor="email">Email</label>
//                     <input type="email" {...register("email")} id="email" className="border p-3" />
//                 </div>
//                 <button type='Submit'>Submit</button>
//             </form>
            
//         </div>
//     )
// }
// export default FormDemo


import {useForm} from "react-hook-form";

function FormDemo(){
    const {register,handleSubmit,formState:{errors}}=useForm();

    //form submit function
    const onFormSubmit = (obj)=>{
        console.log(obj)
    }
    return (
        <div>
            <h1 className="text-center text-3xl">Form Demo</h1>
            <form className="max-w-md mx-auto m"
            onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                <label htmlFor="username"> Username :  </label>
                <input type="text" id="username" className="border w-full p-3" {...register("username", { required: "username is required", minLength: 5, maxLength: 15 })} />
                {/*usename validatoin erroe mesage */}
                {errors.username?.type==="required" && <p className="text-red-500">username is required</p>}
                {
                    errors.username?.type=="minLength" && <p className="text-red-500">username is too short</p>
                }
                </div>
                {/*email*/}
                <div className="mb-3">
                    <label htmlFor="email"> Email :  </label>
                    <input type="email" id="email" {...register("email")} className="border w-full p-3"/>
                </div>
                <button type="submit" style={{color:"red"}}>Submit</button>
            </form>
            
        </div>
    )
}

export default FormDemo