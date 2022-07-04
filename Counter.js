import React, { useState, useEffect } from "react";


// learnt from youtube codeevolution playlist

const Counter = () => {
  const initialvalue = 0;
 const [number, setNumber] = useState(initialvalue);
  const [person, setPerson] = useState({ name: "Geckma", age: 18 });
   const [count, setCount] = useState([]);
  const [block, setBlock] = useState([]);
 const [add, setAdd] = useState(0);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [time, setTime] = useState(0);

   //   useState for object
  const increTwice = () => {
     for (let i = 0; i < 2; i++) {
      setPerson((p) => ({ ...p, age: p.age + 1 }));
    }
  };

    const thrice = () => {
    for (let i = 0; i < 3; i++) {
      setNumber((prev) => prev + 1);
    }
  };

    //  use State for array
  const adding = () => {
    let value = Math.floor(Math.random() * 10) + 1;
    setCount([...count, value]);
  };

    //   useState for array of objects
  const addobj = () => {
   var newid = new Date().getTime().toString();
    setBlock([
      ...block,
      {
        // id: block.length
    id: newid,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };

   function movemouse(e) {
    setY(e.clientY);
    setX(e.clientX);
  }

   useEffect(() => {
    document.title = `you clicked ${add} times`;
    window.addEventListener("mousemove", movemouse);
    
  });

    useEffect(()=>{
  setTimeout(() => {
    setTime(time + 1)
    } , 1000)
  } , [time])

  
   return (
    <>
      <div>
        {time}
   <h2>
          y cordinates {y} , x cord {x}
        </h2>
        <button onClick={() => setAdd(add + 1)}>Click {add} times</button>
        <h2>{number}</h2>
  <button onClick={() => setNumber(initialvalue)}>reset</button>
        <button onClick={() => setNumber((prevVal) => prevVal + 1)}>
          increment
        </button>
  <button
          onClick={() =>
            setNumber((prevVal) => (prevVal > 0 ? prevVal - 1 : prevVal))
          }
        >
          decreement
        </button>
 <button onClick={thrice}>Thrice increment</button>
       <div>
          the age of {person.name} is : {person.age}
          <br /> 
  <button onClick={increTwice}>Increment Twice</button>
        </div>

        <button onClick={adding}>Add a number</button>
        <br />
 {count.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
  {JSON.stringify(count)}
      </div>
      <button onClick={addobj}>increase number</button>
      <br />
 <div>
        {block.map((block, index) => (
          <li key={index}>{block.value}</li>
        ))}
      </div>
