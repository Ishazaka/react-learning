import React , {useState} from 'react';


const Popup = () => {
    const [openmodal , setOpenmodal] =  useState(false)
  return (
    <div className='container'>

         <h2>Please Fill the form</h2>
      <button onClick={() => setOpenmodal(true)}>Open</button>
      {openmodal ? 
      <div className='main-div' >
      {/* <div className={openmodal ? 'show' : 'hide'}> */}
      <div className='box'>
          <button onClick={() => setOpenmodal(false)} className='close'>X</button>
        <h5>your name</h5>
        <input type="text" placeholder="type your name" />
        <h5>your email</h5>
        <input type="text" placeholder="type your email" />
      </div>
      </div> 
    //   </div>
      : '' }
    </div>
  )
}

export default Popup
