
import React, { useState} from "react";


 const Studentdata = ({ info }) => {
 
  const [showgrade, setShowgrade] = useState(true);
  const [taginfo, setTaginfo] = useState("");

 
  const addTags = () => {
    info.addTagsField.push(taginfo);
    setTaginfo("");
  };

  
  return (
    <div className="container">
      <img className="user-pic" alt={info.name} src={info.pic} />
      <div>
          <h5 className="fullName">
            {info.firstName} {info.lastName}
          </h5>
          <h5>Email: {info.email}</h5>
          <h5>Company: {info.company}</h5>
          <h5>Skill: {info.skill}</h5>
          <h5>
            Average:{" "}
            {info.grades.reduce((a, b) => Number(a) + Number(b)) /
              info.grades.length}{" "}
            %
          </h5>
        
          {!showgrade ? info.grades.map((item, index) => (
                <h5 key={index}>
                  {"Test " +(index + 1) +": " + item} %
                </h5>
              ))
            : ""}
    
        <div className="tag-area">
          <ul>
            {info.addTagsField.map((tag, index) => (
              <li className="tagbox" key={index}> {tag} </li>
            ))}
          </ul>

          <input
            className="tagInput" type="text"
          onChange={(event) => setTaginfo(event.target.value)}
          placeholder="Add a tag" value={taginfo}
          onKeyPress={(e) => (e.key === "Enter" ? addTags() : "")}
          />
        </div>
      </div>
      <button className="show-btn" onClick={() => setShowgrade(!showgrade)}>
        {showgrade ? "+" : "-"}
      </button>
    </div>
  );
};


export default Studentdata
