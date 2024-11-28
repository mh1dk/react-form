import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';


function App() {
  const [staff, setStaff] = useState([
    { id: 1, fName: "mahdi", lname: "karimi", age: 20, position: "student"},
    { id: 2, fName: "reza", lname: "ahmadi", age: 33, position: "seo"},
    { id: 3, fName: "ali", lname: "bayani", age: 22, position: "it"},
    { id: 4, fName: "jamshid", lname: "amiri", age: 23, position: "accountant"}
  ]);

  return (
    <div className="container">
      <div className='row vh-100 justify-content-center align-items-center '>
        <div className='col-lg-6'>

          

            <Table data={staff} />

        </div>

        <div className='col-lg-6 p-5 border-start'>
          <Form data={staff} updater = {setStaff} />
        </div>
      </div>
    </div>
  );
}

export default App;
