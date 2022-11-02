import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          name: name,
          age: age,
          country: country,
          position: position,
          wage: wage,
        },
      ]);
    });
  };

  const getEmployee = () => {
    Axios.get("http://localhost:3001/get").then((response) => {
      setEmployeeList(response.data);
      //console.log(response)
    });
  };

  return (
    <div className="App container">
      <h1>Employee Information</h1>
      <div className="information">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="form-control"
            placeholder="Enter Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            onChange={(event) => {
              setAge(event.target.value);
            }}
            className="form-control"
            placeholder="Enter Age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Country:
          </label>
          <input
            type="text"
            onChange={(event) => {
              setCountry(event.target.value);
            }}
            className="form-control"
            placeholder="Enter Country"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="position" className="form-label">
            Position:
          </label>
          <input
            type="text"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
            className="form-control"
            placeholder="Enter Position"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="wage" className="form-label">
            Wage:
          </label>
          <input
            type="number"
            onChange={(event) => {
              setWage(event.target.value);
            }}
            className="form-control"
            placeholder="Enter Wage"
          />
        </div>
        <button className="btn btn-success" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <hr />
      <div className="employees">
        <button className="btn btn-primary" onClick={getEmployee}>
          Show employees
        </button>
        {employeeList.map((val, key) => {
          return <div className="employees"> {val.NAME} </div>;
        })}
      </div>
    </div>
  );
}

export default App;
