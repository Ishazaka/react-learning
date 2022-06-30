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
