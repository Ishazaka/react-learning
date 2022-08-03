import "./App.css";
import React, { useState, useEffect } from "react";
import Studentdata from "./component/Studentdata";

const App = () => {

  const [searchname, setSearchname] = useState("");
  const [searchtag, setSearchtag] = useState("");
  const [data, setData] = useState([]);


  async function getdata(){
    try{
        const  url = "https://api.hatchways.io/assessment/students";
        const response = await fetch(url);
        const data = await response.json();
        let allinfo = [];
        const studentinfos = data.students
        studentinfos.map((student) => {
                student.addTagsField = [];
                allinfo.push(student);
              });
              setData(allinfo);

    } catch (error){
     console.log(error)
    }
   
  }

useEffect(() => {
  getdata();

}, [])



  return (
    
    <div className="Container-box">
     <div className="info-card">
      <div className="search-areas">
        <input type="text"   onChange={(event) => setSearchname(event.target.value)} placeholder=" Search by name" />
        <input type="text"  onChange={(event) => setSearchtag(event.target.value)} placeholder=" Search by tag"/>
      </div>
      <div className="content">
        {data
          .filter((value) => {
            if (searchname === "" && searchtag === "") {
              return value;
            } else if (
              value.firstName.concat(" ").concat(value.lastName).toLowerCase().includes(searchname.toLowerCase())
            ) {
              if (searchtag === "") {
                return value;
              } else if (
                value.addTagsField.filter((tag) => tag.toLowerCase().includes(searchtag)).length >= 1
              ) {
                return value;
              }
            }
          })
          .map((info, index) => (
            <Studentdata key={index} info={info} />
          ))
        }
      </div>
      </div>
    </div>
  );
};

export default App;
