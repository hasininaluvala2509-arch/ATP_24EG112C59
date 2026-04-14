import {createContext} from 'react'
import { useState } from 'react'

//create context provider obj//
export const counterContextObj2=createContext() 

function ContextProvider2({children}) {
    //state
    const [counter,setCounter]=useState(10);
    //fun to change state
    const changeCounter=()=>{
        setCounter(counter-1)
    };
  return (
    <counterContextObj.Provider value={{counter,changeCounter}}>
        {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider2