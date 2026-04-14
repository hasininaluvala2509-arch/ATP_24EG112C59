import {createContext} from 'react'
import { useState } from 'react'

//create context provider obj//
export const counterContextObj=createContext() 

function ContextProvider({children}) {
    //state
    const [counter,setCounter]=useState(0);
    //fun to change state
    const increment=()=>{
        setCounter(counter+1)
    };
    const decrement=()=>{
        setCounter(counter-1)
    };
  return (
    <counterContextObj.Provider value={{counter,increment,decrement}}>
        {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider