import React, {useState,useEffect} from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'
const EmployeeComponent = () => {
    const [firstName,setFirstName]=useState('')
    const [lastName,setLastName]=useState('')
    const [email_id,setEmail]=useState('')

    // function handleFirstName(e){
    //     setFirstName(e.target.value);
    // }

    // function handleLastName(e){
    //     setLastName(e.target.value);
    // }

    // function handleEmailid(e){
    //     setEmail(e.target.value);
    // }


    const {id}=useParams();

    const [errors,setErrors]=useState({
        firstName:'',
        lastName:'',
        email_id:''
    })

    const navigator=useNavigate();

    useEffect(()=>{
        if(id){
            getEmployee(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email_id);
            }).catch(error=>{
                console.error(error);
            })
        }
        }, [id])

    function saveOrUpdateEmployee(e){
        e.preventDefault();

        const employee ={firstName,lastName,email_id}
        console.log(employee)

        if(validateForm()){ //to avoid blank submission so this if condition
            if(id){
                updateEmployee(id,employee).then((response)=>{
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error=>{
                    console.error(error);
                })
            }else{

        createEmployee(employee).then((response)=>{
            console.log(response.data);
            navigator('/employees')
        }).catcg(error=>{
            console.log(error);
        })
    }
}
    }


    function validateForm(){
        let valid=true;
        const errorsCopy={...errors}
        if(firstName.trim()){
            errorsCopy.firstName='';
        }else{
            errorsCopy.firstName='First name is required';
            valid=false;
        }
        if(lastName.trim()){
            errorsCopy.lastName='';
        }else{
            errorsCopy.lastName='Last name is required';
            valid=false;
        }

        if(email_id.trim()){
            errorsCopy.email_id='';
        }else{
            errorsCopy.email_id='Email is required';
            valid=false;
        }
        setErrors(errorsCopy);
        return valid;
    }



    function pageTitle(){
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }



  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            {/* <h2 className='text-center'>Add Employee</h2> */}
            {
                pageTitle()
            }
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-label'>First Name:</label>
                        <input
                        type='text'
                        placeholder='Enter Employee First Name'
                        name='firstName'
                        value={firstName}
                        className={`form-control ${errors.firstName ? `is-invalid`:''}`} 
                        //event handling
                        onChange={(e)=>setFirstName(e.target.value)}
                        >
                        </input>
                        {errors.firstName && <div class="invalid-feedback">{errors.firstName}</div>}
                    </div>

                                        <div className='form-group mb-2'>
                        <label className='form-label'>Last Name:</label>
                        <input
                        type='text'
                        placeholder='Enter Employee Last Name'
                        name='lastName'
                        value={lastName}
                        className={`form-control ${errors.lastName ? `is-invalid`:''}`} 
                        //event handling
                        onChange={(e)=>setLastName(e.target.value)}
                        >
                        </input>
                        {errors.lastName && <div class="invalid-feedback">{errors.lastName}</div>}
                    </div>

                                        <div className='form-group mb-2'>
                        <label className='form-label'>Email:</label>
                        <input
                        type='text'
                        placeholder='Enter Employee Email Id'
                        name='email'
                        value={email_id}
                        className={`form-control ${errors.email_id ? `is-invalid`:''}`} 
                        //event handling
                        onChange={(e)=>setEmail(e.target.value)}
                        >
                        </input>
                        {errors.email_id&& <div class="invalid-feedback">{errors.email_id}</div>}
                    </div>

                    <buttonn className='btn btn-success' onClick={saveOrUpdateEmployee}>Submit</buttonn>
                </form>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EmployeeComponent