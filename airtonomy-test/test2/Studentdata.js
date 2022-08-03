
import React, { useState } from 'react'

const Studentdata = ({ alldata }) => {
    const [searchname, setSearchname] = useState('');
    // const [userInput, setUserInput] = useState('');
    const [text, setText] = useState([]);
    const [expand, setExpand] = useState(true);


    const filteredData = alldata && alldata.filter(data => {
        return (data.firstName.toLowerCase() + data.lastName.toLowerCase()).includes(searchname.toLowerCase());
    })

    const addTags = () => {
        alldata && alldata.map(a => a.addTagsField.push(text));
        setText("");
    };


    //   const something=(event)=> {
    //     if (event.key === "Enter") {
    //         console.log(event)
    //     }
    // }



    return (

        <>
            {alldata &&
                <div className='main-container' >
                    <div className='student-info-container'>

                        <input placeholder='Search by name' onChange={(e) => setSearchname(e.target.value)}></input>
                        <hr></hr>


                        {filteredData.map((info) => {
                            const userGrades = info.grades
                            return (
                                <>
                                    <div className='each-student-info' key={info.id}>
                                        <div className='img-box'><img src={info.pic} alt='image'></img> </div>

                                        <div className='info-box'>
                                            <div className='name_icon'>
                                                <h1>{info.firstName} {info.lastName}</h1>
                                               
                                            </div>

                                            <h5>Email: {info.email}</h5>
                                            <h5>Company: {info.company}</h5>
                                            <h5>Skill: {info.skill}</h5>
                                            <h5>Average: {info.skill}</h5>
                                            <div >
                                                {userGrades.map((userPercentage, idx) => (
                                                    <h5 key={idx}>Test {idx + 1} : {userPercentage}%  </h5>
                                                ))}

                                            </div>

                                        </div>


                                    </div>
                                    {/* <input value={userInput} type="text" onKeyDown={(e) => something(e) } onChange={handleChange} placeholder="Enter task..."/> */}
                                    <button className="toggleButton" onClick={() => setExpand(!expand)}>
                                                    {expand ? "+" : "-"}
                                                </button>
                                    <hr ></hr>
                                </>
                            )


                        })

                        }
                     <input
                            className="tagInput"
                            type="text"
                            placeholder="Add a tag"
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                            onKeyPress={(e) => (e.key === "Enter" ? addTags() : "")}
                        />


                    </div>
                  
                </div>
            }
        </>
    )
}

export default Studentdata




{/* <h5>Test 1:  {info.grades[1]} %</h5>
                                            <h5>Test 2:  {info.grades[0]} %</h5>
                                            <h5>Test 3:  {info.grades[2]}%</h5>
                                            <h5>Test 4:  {info.grades[3]} %</h5>
                                            <h5>Test 5:  {info.grades[4]}%</h5>
                                            <h5>Test 6:  {info.grades[5]} %</h5>
                                            <h5>Test 7:  {info.grades[6]}%</h5>
                                            <h5>Test 8:  {info.grades[7]} %</h5> */}
