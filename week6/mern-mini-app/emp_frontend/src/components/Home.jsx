import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './Test'
//store 
import { useCounterStore } from '../store/CounterStore'

function Home() {

  // let newCounter=useCounterStore((state)=>state.newCounter)
  // let incrementCounter=useCounterStore((state)=>state.incrementCounter)
  // let decrementCounter=useCounterStore((state)=>state.decrementCounter)

  // let newCounter1=useCounterStore((state)=>state.newCounter1)
  // let incrementCounter1=useCounterStore((state)=>state.incrementCounter1)
  // let decrementCounter1=useCounterStore((state)=>state.decrementCounter1)

  const {counter,changeCounter}=useContext(counterContextObj)
  console.log("Home")
  return (
    <div>
      <h2>Home</h2>
      <h1 className='text-3xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-100 p-5'>Change</button>
      
      {/* <h1>New Counter: {newCounter}</h1>
      <button onClick={incrementCounter} className='bg-amber-200 p-2'>Add</button>
      <button onClick={decrementCounter} className='bg-amber-200 p-2'>Sub</button>

      <h1 className='mt-5'>New Counter1: {newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-amber-200 p-2'>Add</button>
      <button onClick={decrementCounter1} className='bg-amber-200 p-2'>Sub</button> */}
      <Test />
    </div>
  )
}

export default Home