import React from "react";

const Paginate = ({ dataperpage, totaldata , paginateme }) => {
  const PageNumber = [];
  for (let i = 1; i <= Math.ceil(totaldata / dataperpage); i++) {
    PageNumber.push(i);
  }

  return (
    <div style={{display:'flex' }}>
      {PageNumber.map((number) => (
        <li key={number}>
          <a onClick={() => paginateme(number)} href="!#">{number}</a>
        </li>
      ))}
    </div>
  );
};

export default Paginate;
