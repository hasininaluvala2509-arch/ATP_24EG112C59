import {useEffect,useState} from "react"
function APIDemo(){
    console.log("API Demo component is rendered")
    let [users,setUsers]=useState([])
    let [loading, setLoading] = useState(false);
    let [error, setError]=useState(null)

    useEffect(()=>{
       //a function to make api req
       async function getData(){
        //set loading to true
        setLoading(true);
        try{
         let res=await fetch("https://jsonplaceholder.typicode.com/users")
         let usersList=await res.json()
         console.log(usersList)
         //update state
         setUsers(usersList)
        }
        catch(err){
            console.log("err is :",err)
            //update error state
            setError(err)
        }
        finally{
            setLoading(false);
        }
       }
       //call 
       getData()
    },[])

    //deal with loading
    if(loading)
        return <p className="text-center text-red-400 text-5xl">Loading.....</p>

    //error
    if(error!==null)
        return <p className="text-center text-red-400 text-5xl">{error.message}</p>


    return(
        <div className="text-center mt-10">
           <h1 className="bg-amber-100">Users List</h1>
          
            {users.map((userObj)=>(
                <div key={userObj.id}>
                    <p>{userObj.id}</p>
                    <p>{userObj.name}</p>
                    <p>{userObj.email}</p>
                </div>
                ))}
           
         
        </div>
    )   
}
export default APIDemo;