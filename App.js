
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
