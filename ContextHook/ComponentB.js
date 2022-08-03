
import React, { useContext } from 'react'
import ComponentC from './ComponentC'
import { UserContext , EmailContext } from './Contexthook'

const ComponentB = () => {
   const user =  useContext(UserContext);
  const email =  useContext(EmailContext);
  console.log(user , email)
  return (
    <div>
  hello how are you {user} - this is your  {email}
    </div>
    
  )

  
 
   
   
  
}

export default ComponentB
