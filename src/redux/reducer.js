import {Add, AllData, Delete, Edit, Hello} from './types'
import {isEmpty} from 'lodash'


const initialState={
    data:[],
    selectedData:[]
}


const reducer = (state=initialState,action) =>{
    //console.log("Dekho",action)
    switch(action.type){
        case Hello:{
            console.log("Yeh bhi chal rhaa h")
            return state;
        }
        case AllData:{
            const obj={...state}
            const temp=[...obj.data]
            if(!isEmpty(temp))
            {
                return obj;
            }
            const arr=[...obj.data,...action.payload]
            obj.data=arr;
            return obj;

        }
        case Delete:{
            const index = action.payload.id
            const obj={...state}
            const arr=[...obj.data]
            arr.splice(index,1)
            obj.data=arr;
            return obj;
        }
        case Add:{
            const obj={...state}
            const arr=[...obj.data,action.payload]
            obj.data=arr;
            return obj;
        }
        case Edit:{
            const obj={...state}
            const arr=[...obj.data]
            arr[action.payload.idx].name=action.payload.name;
            arr[action.payload.idx].username=action.payload.username
            arr[action.payload.idx].email=action.payload.email
            arr[action.payload.idx].phone=action.payload.phone
            obj.data=arr;
            return obj;
        }
    }
    //console.log("Chal jaa")
}

export default reducer