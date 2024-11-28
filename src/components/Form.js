import { useState } from "react";

const Form = ({data , updater}) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');



const handleClick = (e) => {
    e.preventDefault();
    const inputObject = {
        fName,
        lName,
        age,
        position
    }
    const temp = [...data];
    temp.push(inputObject);
    updater(temp)
}


return(

    <form className="border p-4 rounded">
  <div className="mb-3">
    <label htmlForor="firstname" className="form-label">first name</label>
    <input type="email" className="form-control" id="firstname" aria-describedby="emailHelp" value={fName} onChange={(e) => {setFName(e.target.value)}} />
  </div>


  <div className="mb-3">
    <label htmlForor="lastname" className="form-label">last name</label>
    <input type="email" className="form-control" id="lastname" aria-describedby="emailHelp" value={lName} onChange={(e) => {setLName(e.target.value)}} />
  </div>



  <div className="mb-3">
    <label htmlForor="age" className="form-label">age</label>
    <input type="email" className="form-control" id="age" aria-describedby="emailHelp" value={age} onChange={(e) => {setAge(e.target.value)}} />
  </div>



  <div className="mb-3">
    <label htmlForor="position" className="form-label">position</label>
    <input type="email" className="form-control" id="position" aria-describedby="emailHelp" value={position} onChange={(e) => {setPosition(e.target.value)}} />
  </div>

  <button type="submit" class="btn btn-primary" onClick={handleClick}>Submit</button>
</form>
)
}
export default Form;

