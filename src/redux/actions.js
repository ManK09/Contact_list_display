import {Add, AllData, Delete, Edit, Hello} from './types'

export const Hell = (obj) =>{

    console.log("ye to chal raha h")
    return{
        type:Hello,
        payload:obj
    }
}

export const takeEntireData = (obj)=>{
    return{
        type:AllData,
        payload:obj
    }
}

export const deleteEntry = (obj) =>{
    return{
        type:Delete,
        payload:obj
    }
}

export const addEntry = (obj) =>{
    return{
        type:Add,
        payload:obj
    }
}
export const editEntry = (obj) =>{
    return{
        type:Edit,
        payload:obj
    }
}