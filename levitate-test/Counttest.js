
import React, {createContext, useState} from 'react'
import ButtonDiv from './ButtonDiv'

export  const FuncVal = createContext()
const Counttest = () => {
    const [add, setAdd] = useState(0)
   

    const countit = () => {
        setAdd((p) => p + 1)
    }

  return (
    <div>
         <FuncVal.Provider value={countit}>
         <h2>{add}</h2>
        <ButtonDiv />
         </FuncVal.Provider>
       
    </div>
  )
}

export default Counttest
