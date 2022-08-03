
import React , {useContext} from 'react';
import { FuncVal } from './Counttest';


const Button = () => {
  const handlefunc = useContext(FuncVal)
  return (
    <>
    <button onClick={handlefunc}>count</button>
    </>
  )
}

export default Button
