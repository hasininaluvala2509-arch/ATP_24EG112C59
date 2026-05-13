import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import axios from'axios'

function ListOfEmps() {
  const [emps, setEmps] = useState([]);

  const navigate=useNavigate()

  const gotoEmployee=(empObj)=>{
    //navigate to /employe
    navigate("/employe",{state:empObj})//2 args 2nd is optional i.e to pass state
  }
  const gotoEditEmp=(empObj)=>{
    navigate("/edit-emp",{state:empObj})
  }

  const deleteEmpById=async(id)=>{
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5500"
    let res= await axios.delete(`${apiBaseUrl}/emp/employee/${id}`)
    if(res.status===200){
      //get latest data
      getEmps();
    }
  }

    //get all emps
    async function getEmps() {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5500"
      let res = await axios.get(`${apiBaseUrl}/emp/employee`);
      if (res.status === 200) {
        let resObj = res.data
        setEmps(resObj.payload);
      }
    }
    useEffect(() => {
    getEmps();//?
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5 text-center gap-3 ">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* <p>{empObj.name}</p> */}
            {/* 3 buttons */}
            <div className="flex justify-around">
            <button className="text-1.5xl text-blue-300 bg-blue-900 rounded-2xl p-2 " onClick={()=>gotoEmployee(empObj)}>View</button>
            <button className="text-1.5xl text-blue-300 bg-blue-900 rounded-2xl p-2" onClick={()=>gotoEditEmp(empObj)}>EDIT</button>
            <button className="text-1.5xl text-blue-300 bg-blue-900 rounded-2xl p-2" onClick={()=>deleteEmpById(empObj._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;