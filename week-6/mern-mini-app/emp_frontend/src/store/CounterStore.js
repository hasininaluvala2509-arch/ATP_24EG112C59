import {create} from 'zustand'

//create store
export const useCounterStore = create((set)=>({
    //state
    newCounter:0,
    newCounter1:0,
    //add user state (name,age,email)
    users:{name:"ravi",email:"ravi@gmail.com",age:20},
    //function
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-1})),
    //change email
    changeEmail:()=>set({...user,email:"test@gmail.com"}),
    //change name and age
    changeNameAndAge:()=>set({...user,name:"Bhanu",age:21}),
    changeAge:()=>set({...user,age:19}),
    reset:()=>set({newCounter:0})
}))//set function to create store