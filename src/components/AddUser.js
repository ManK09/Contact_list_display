import React,{useState} from 'react'
import {Input, Button} from 'antd'
import {Redirect, Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import { nanoid } from 'nanoid'
import { addEntry } from '../redux/actions'
import { isEmpty } from 'lodash'
import axios from 'axios'
function AddUser() {

    const dispatch = useDispatch();
    const [flag,setFlag]= useState(0);

    const  handleSubmit = () =>{

        if(isEmpty(name))
        {
            alert("Name is required")
        }
        else if(isEmpty(email))
        {
            alert("Email is required")
        }
        else if(isEmpty(userName))
        {
            alert("Username is Required")
        }
        else{
            const obj={
                id:nanoid(),
                name:name,
                username:userName,
                email:email,
                phone:phone
            }
            dispatch(addEntry(obj));
            axios.post('https://reqres.in/api/users',obj).then(response => {
                alert("Entry Added")
            }).
            catch(err => {
            });
            setFlag(1);

        }

    }
    const [name,setName] = useState("");
    const [userName,setUserName]= useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    if(flag) return <Redirect to='/homepage' exact />
    return (
        <div>
            <h3>Add User</h3>
            <Input placeholder="Enter Name" name="name" value={name} onChange={event => setName(event.target.value)}/>
            <br />
            <Input placeholder="Enter User Name" name="userName" value={userName} onChange={event => setUserName(event.target.value)}/>
            <br />
            <Input placeholder="Enter E mail" name="email" value={email} onChange={event => setEmail(event.target.value)}/>
            <br />
            <Input placeholder="Enter Phone" name="password" value={phone} onChange={event => setPhone(event.target.value)}/>
            <br />
            {/* <Link to='/homepage'><Button type="primary" onClick={handleSubmit}>Submit</Button></Link> */}
            <Button type="primary" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default AddUser
