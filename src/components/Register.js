import React,{useState} from 'react'
import { Input, Button } from 'antd';
import {Link} from 'react-router-dom';
import {isEmpty} from 'lodash';
import {Redirect} from 'react-router-dom'
import axios from 'axios';

function Register() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [flag,setFlag]= useState(0);

    const handleClick = () =>{
        if(isEmpty(email))
        {
            alert("Email is required")
        }
        else if(isEmpty(password))
        {
            alert("Password is Required")
        }
        else
        {
            const obj={
                "email": "eve.holt@reqres.in",
                "password": "pistol"
            }
            //console.log(obj)
            axios.post('https://reqres.in/api/register',
            obj).then(response => {
                alert("User registered")
                console.log(response)
            }).
            catch(err => {
                alert(err.response.data.error)
                console.log(err,err.response)
            });
            setFlag(1);
        }
    }
    if(flag)
    {
        return <Redirect to='/' />
    }
    return (
        <div>
        <div>
            <h3>Register</h3>
            <Input placeholder="Enter E mail" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
            <br />
            <Input placeholder="Enter Password" name="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <br />
            <Button type="primary" onClick={handleClick}>Register</Button>
        </div>
        {/* <div>
        Please use:
        <br />
        <b>Email :</b> eve.holt@reqres.in
        <br />
        <b>Password:</b> pistol
        </div> */}
    </div>
    )
}

export default Register
