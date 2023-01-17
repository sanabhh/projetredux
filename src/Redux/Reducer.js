import { HANDLEDELETE, HANDLEDONE } from "./Actiontype"


const initialstate={
    Tasks:[
        { text: 'Buy tabbac', id : 0 , isDone:false},        
        {text: 'Buy more tabbac', id:1 , isDone:false},
        {text:'Quit smoking', id:2, isDone:false}
    ]
}

const Reducer = (state=initialstate,action)=>{

    switch (action.type) {
        
        default : return state
        case HANDLEDELETE : return {...state,Tasks: state.Tasks.filter(el=>el.id !== action.payload)}
        case HANDLEDONE  : return {...state, Tasks: state.Tasks.map(el=>el.id ===action.payload?{...el,isDone:!el.isDone}:el)}
    }
}

export default Reducer