import React,{useEffect,useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import {useNavigate} from 'react-router-dom'


//dummy data

// const ListEmployeeComponent = () => {
// //create arrow
//     const DummyData=[ //array
//   {
//     "id": 1,
//     "firstName": "Me",
//     "lastName": "Wo",
//     "email_id": "mewo@gmail.com"
//   },
//   {
//     "id": 2,
//     "firstName": "John",
//     "lastName": "Doe",
//     "email_id": "john.doe@example.com"
//   },
//   {
//     "id": 3,
//     "firstName": "Jane",
//     "lastName": "Smith",
//     "email_id": "jane.smith@example.com"
//   },
//   {
//     "id": 4,
//     "firstName": "Alice",
//     "lastName": "Johnson",
//     "email_id": "alice.johnson@example.com"
//   },
//   {
//     "id": 5,
//     "firstName": "Bob",
//     "lastName": "Brown",
//     "email_id": "bob.brown@example.com"
//   }
// ];

const ListEmployeeComponent=()=>{
    //state hook
    const [employees,setEmployees]=useState([]) //const[state variable, function that updates the state varaiable]=usestate([])
    const navigator=useNavigate();
    useEffect(()=>{
       getAllEmployees();
    },[]) //empty array is for dependencies here we dont have any dependencies
    //useeffcet takes 2 parametr-> call by value and dependency

    function getAllEmployees(){
         listEmployees().then((response)=>{
            setEmployees(response.data);
        }).catch(error=>{
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }


    function updateEmployee(id){
        navigator(`/edit-employee/${id}`) //back tick
    }

    function removeEmployee(id){
        console.log(id);

        deleteEmployee(id).then((response)=>{
            console.log(response);
            getAllEmployees();
        }).catch(error=>{
            console.error(error);
        })
    }


  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button type="button" className="btn btn-primary mb-2" onClick={(addNewEmployee)}>Add Employee</button>  {/* mb2 margin2 */}
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th style={{width: "180px"}}>Actions</th>

                   
                </tr>
            </thead>
            <tbody>
        
                {
                    employees.map(employee=>   //instead of DummyData.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email_id}</td>
                            <td>
                                <div className="d-flex">
                                <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}
                                    style={{marginLeft:'10px'}}
                                    >Delete</button>
                                    </div>
                            </td>
                        </tr>
                    ) // map used to iterate and return object and curly braces is where javascript code we need is written like summy data here
                }
                <tr>

                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default ListEmployeeComponent