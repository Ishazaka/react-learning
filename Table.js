import React from 'react'
import './App.css'
// import Users from './data'

const Table = ({data}) => {
  return (
    <div>
<table>
    <tbody>
        <tr>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {data.map((item) => (
             <tr>
             <td>{item.first_name}</td>
             <td> {item.email}</td>
         </tr>
        ))}
       

    </tbody>
</table>

    </div>
  )
}

export default Table
