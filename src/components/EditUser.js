import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {Input, Button} from 'antd'
import {Redirect, Link} from 'react-router-dom'
import { nanoid } from 'nanoid'
import { addEntry, editEntry } from '../redux/actions'
import { isEmpty } from 'lodash'
import axios from 'axios'

export default function EditUser() {


    const {key}=useParams();
    const dispatch = useDispatch();
    const data=useSelector(state=>state?.data)

    const idx=data.map(x => {return x.id}).indexOf(key)



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
                idx:idx,
                name:name,
                username:userName,
                email:email,
                phone:phone
            }
            dispatch(editEntry(obj));
            setFlag(1);

        }

    }
    const [name,setName] = useState(data[idx].name);
    const [userName,setUserName]= useState(data[idx].username);
    const [email,setEmail] = useState(data[idx].email);
    const [phone,setPhone] = useState(data[idx].phone);
    // const [name,setName] = useState("");
    // const [userName,setUserName]= useState("");
    // const [email,setEmail] = useState("");
    // const [phone,setPhone] = useState("");

    if(flag) return <Redirect to='/homepage' exact />
    return (
        <div>
            <h3>Edit</h3>
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
