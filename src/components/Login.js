import React,{useState, useEffect} from 'react'
import {Input, Button} from 'antd'
import {Link} from 'react-router-dom'
import {isEmpty} from 'lodash'
import {Redirect} from 'react-router-dom'
import axios from 'axios'

function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const [flag,setFlag]= useState(0);

    useEffect(()=>{
        const str=window.localStorage.getItem('allow');
        if(str==='true')
        {
            setFlag(1);
        }

    })
    
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
               email,
               password
            }
            // const temp ={
            //     "email": "eve.holt@reqres.in",
            //     "password": "cityslicka"
            // }
            //console.log(obj)
            axios.post('https://reqres.in/api/login',
            obj).then(response => {
                alert("User Logged In")
                window.localStorage.setItem('allow','true');
                setFlag(1);
            }).catch(err => {
                alert(err.response.data.error)
                //console.log(err,err.response.data.error)
            })




            // window.localStorage.setItem('allow','true');
            // setFlag(1);
        }
    }

    //console.log("hi",flag);

    if(flag)
    {
        return <Redirect to='/homepage' exact/>
    }
    return (
        <div>
        <div>
            <h3>Login</h3>
            <Input placeholder="Enter E mail" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
            <br />
            <Input placeholder="Enter Password" name="password" value={password} onChange={event => setPassword(event.target.value)}/>
            <br />
            <Button type="primary" onClick={handleClick}>Login</Button>
            <br />
            New User ? <Link to = '/register'><Button>Register</Button></Link>
        </div>
        <br />
        <br />
        <div>
            Please use:
            <br />
            <b>Email :</b> eve.holt@reqres.in
            <br />
            <b>Password:</b> cityslicka
        </div>
        </div>
    )
}

export default Login
