import { useState } from "react";

function TestRefType(){
//state
const [user, setUser] = useState({username:"ravi", age:30,city:"hyd"})
const [marks, setMarks] = useState([10,20,30])

//update user state
const updateUser =()=>{
    setUser({...user,username:"bhanu"})
};
//update marks
const updateMarks=()=>{
    setMarks([...marks,40])
}

return(
    <div>
            <p className="bg-amber-200">Name: {user.username}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
            <button className="text-3xl bg-cyan-100" onClick={updateUser}> Update User Name</button>

            {/* <button onClick={updateMarks}>Update Marks</button> */}
    </div>
    )
}
export default TestRefType;