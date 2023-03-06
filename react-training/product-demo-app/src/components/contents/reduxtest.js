import { useSelector, useDispatch } from 'react-redux'
import {decrement,increment,incrementByAmount} from '../redux/slices/demoSlice'
import { setUsername } from '../redux/slices/loginSlice'

export default function ReduxTest(){

    const dispatch = useDispatch()

    return (

        <>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(setUsername('Ashbyn'))}
        >
          Login
        </button>


        </>
    )
}