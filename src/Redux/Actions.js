import { HANDLEDELETE, HANDLEDONE } from "./Actiontype"

export const handledelete= (payload)=>{

    return(
        {
            type: HANDLEDELETE,
            payload
        }
    )
}

export const handledone =(payload)=>{
    return(
        {
            type:HANDLEDONE,
            payload
        }
    )
}