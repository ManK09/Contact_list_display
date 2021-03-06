import React,{useState,useEffect} from 'react'

import 'antd/dist/antd.css';
import { Modal,Input,Button,Space, Table } from 'antd';
import {useSelector, useDispatch} from 'react-redux'
import { nanoid } from 'nanoid'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'
import {deleteEntry, takeEntireData} from '../redux/actions'

const opacity={
    cursor:"pointer"
}

function HomePage() {

    // const [arr,setArr] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [deleteIndex,setDeleteIndex]=useState(-1);
    const data=useSelector(state=>state?.data)
    const [search,setSearch] = useState("");

    console.log("HIii",data);
    
    const dispatch = useDispatch();

    const [showData,setShowData]=useState();

    // dispatch(Hell({id:1}));

    useEffect(()=>{
        axios.get('https://reqres.in/api/users').then(
            response =>{

                const temp=response.data.data;
                const dataTemp = temp.map((item)=>{
                    const obj = {
                        email:item.email,
                        phone:item.phone,
                        username:item.first_name,
                        name:`${item.first_name} ${item.last_name}`,
                        id:nanoid()
                    }
                    return obj;
                })
                dispatch(takeEntireData(dataTemp))
                // setArr(temp)
            }
        )
    },[])
    const excludedSpecialCharsRegex="[\\[\\]?*+|{}\\\\()@.\n\r]";
    useEffect(()=>{
        if(search.search(excludedSpecialCharsRegex)==-1)
        {
            setShowData(data?.filter(val =>{
                //console.log("Dekh",val.username)
                return val.username?.toLowerCase().match(search.toLowerCase()) || val.name?.toLowerCase().match(search.toLowerCase()) || val.email?.toLowerCase().match(search.toLowerCase()) || val.phone?.toLowerCase().match(search.toLowerCase());
            }));
        }
    },[search,data])

    // console.log("Hey",showData,"batao")

    const handleDelete = (index) =>{

        setDeleteIndex(index);
        setIsModalVisible(true);
    }


    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          //render: text => <a>{text}</a>,
        },
        {
          title: 'E mail Address',
          dataIndex: 'email',
          key: 'email',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record,index) => (
            <Space size="middle">
              <Link to={`/${record.id}`}><Button type="primary">Edit</Button></Link>
              <Button style={{background:'#f50057', borderColor:'#f50057', color:'white'}}  onClick={()=>{handleDelete(index)}}>
                  Delete</Button>
            </Space>
          ),
        },
      ];

    
      const handleOk = () => {
        //console.log(deleteIndex,"acha")
        const obj={
            id:deleteIndex
        }
        dispatch(deleteEntry(obj));
        setIsModalVisible(false);
        axios.delete(`https://reqres.in/api/users/${deleteIndex}`).then(response => alert("Entry Deleted")).catch(err => alert("err",err))
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

      const handleClick = () =>{
          //console.log("Hiiii")
      }
      const x=window.localStorage.getItem('allow');
    if(x!=='true')
    {
        return <Redirect to='/' exact />
    }

    return (
        <div style={{...opacity}}>
            <h2>My Customers</h2>
            <br />
            <Input placeholder="Search" name="search" value={search} onChange={event => setSearch(event.target.value)}/>
            <br />
            <br />
            <Link to='/adduser'><Button type="primary" onClick={handleClick}>Add User</Button></Link>

            <Table columns={columns} dataSource={showData} />

            <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}
            footer={[<Button onClick={handleCancel}>Noo, Cancel</Button>, <Button type="primary" onClick={handleOk}>Yes, Delete</Button>]}>
                <p><b>Are you sure you want  to Delete this item?</b></p>
            </Modal>

        </div>
    )
}

export default HomePage
