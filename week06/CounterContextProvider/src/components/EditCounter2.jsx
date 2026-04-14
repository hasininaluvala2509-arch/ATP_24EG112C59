import { counterContextObj } from '../context/CounterContext'
import { useContext } from 'react'

function EditCounter2() {
    const {counter,increment,decrement} = useContext(counterContextObj)
  return (
    <div>
        <p className='text-2xl text-center'>EditCounter3</p>
        <div className='bg-olive-600 text-center'>
            <h1 className='text-2xl'>{counter}</h1>
            <div className='flex gap-3'>
            <button onClick={increment} className='bg-olive-300 p-2 mb-5'>+</button>
            <button onClick={decrement} className='bg-olive-300 p-2 mb-5'>-</button>
            </div>
        </div>
    </div>
  )
}

export default EditCounter2