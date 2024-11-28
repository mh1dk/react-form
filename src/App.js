import { useState } from 'react';
import './App.css';
import Table from './components/Table';


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

          {/* <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table> */}

            <Table data={staff} />

        </div>
      </div>
    </div>
  );
}

export default App;
