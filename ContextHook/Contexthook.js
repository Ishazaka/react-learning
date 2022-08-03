
import React, { createContext } from 'react'
import ComponentA from './ComponentA'

 export const UserContext = createContext();
 export const EmailContext = createContext()
  const Contexthook = () => {
    
  return (
    <div>
        <UserContext.Provider value={'hilgrom baxter'}>
            <EmailContext.Provider value={'hilgrom@abc'}>
            <ComponentA />
            </EmailContext.Provider>
      
        </UserContext.Provider>
      
    </div>
  )
}

export default Contexthook
