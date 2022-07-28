
import "./App.css";
import React, { useState } from "react";
import Popup from "./Popup";
import Counter from "./Counter";
import Users from "./data";
import Table from './Table';
import Paginate from './Paginate'


function App() {
  const [query, setQuery] = useState("");
 const [currentpage , setCurrentpage] = useState(1);
 const [dataperpage , setDataperpage] = useState(10);

   const lastdata = currentpage * dataperpage;
 const firstdata = lastdata - dataperpage;
 const currentdata = Users.slice(firstdata , lastdata)
 

  const paginateme = (number) => {
   setCurrentpage(number)
 }

  
  const search = (data)=>{
   return  data.filter((item) => item.first_name.toLowerCase().includes(query) || item.email.toLowerCase().includes(query) )
  }
  return (
    <>
      <div className="box">
        <input
          type="text"
          placeholder="text"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

  <Table data={search(currentdata)} />
  <Paginate dataperpage={dataperpage} totaldata={Users.length}  paginateme={paginateme}/>
      {/* < Popup />
      <Counter /> */}
    </>
  );
}

export default App;
