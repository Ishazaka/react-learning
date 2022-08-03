
import { useState , useEffect } from 'react';
import './App.css';
import Studentdata from './component/Studentdata';

function App() {
  const [alldata, setAlldata] = useState();

  async function getdata(){
      try{
          const  url = "https://api.hatchways.io/assessment/students";
          const response = await fetch(url);
          const data = await response.json();
          console.log(data)
          const studentinfos = data.students
          setAlldata(studentinfos);

      } catch (error){
       console.log(error)
      }
     
    }

 

  useEffect(() => {
    getdata();
  
  }, [])


  return (
   <>
< Studentdata  alldata={alldata} />
   </>
  );
}

export default App;
