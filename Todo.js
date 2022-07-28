
import React, { useState , useEffect} from "react";

const getlocaldata = () => {
   const newlocal = localStorage.getItem('mylist');
   if(newlocal){
    return JSON.parse(newlocal)
   }else{
    return []
   }
}

const Todo = () => {
  const [data, setData] = useState("");
  const [items, setItems] = useState(getlocaldata());
  const [edit, setEdit] = useState('')

  function additem() {
    if (!data) {
      alert("plz add something");
    } else {
      const uniquedata = {
        id: new Date().getTime().toString(),
        name: data,
      };
      setItems([...items, uniquedata]);
      setData("");
    }
  }
  function clear() {
    setItems([]);
  }

  function delitem(index) {
    const newitem = items.filter((item) => {
      return item.id !== index;
    });
    setItems(newitem);
  }

  const edititem =(index) => {
      const edited =  items.find((item) => {
       return  item.id === index
       })
       setEdit(index)
       setData(edited.name)
  }

  useEffect(() => {
    localStorage.setItem('mylist' , JSON.stringify(items))
  }, [items])
  

  return (
    <div>
      <input
        type="text"
        placeholder="add something"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={additem}>add</button>

      <div>
        {items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <button onClick={() =>edititem(item.id)}>edit</button>
            <button onClick={() => delitem(item.id)}>Delete</button>
          </div>
        ))}
      </div>
      <button onClick={clear}>clear all</button>
    </div>
  );
};

export default Todo;
