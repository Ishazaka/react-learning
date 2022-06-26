import React, { useState, useEffect } from "react";


// learnt from youtube codeevolution playlist

const Counter = () => {
  const initialvalue = 0;
 const [number, setNumber] = useState(initialvalue);
  const [person, setPerson] = useState({ name: "Geckma", age: 18 });
