import { useDispatch } from "react-redux"
import { handledelete, handledone } from "../Redux/Actions"


const Cardlist = ({el})=>{

    const dispatch=useDispatch()
    return(
        <div>
            <h3 className={el.isDone && 'done'}>{el.text}</h3>
            <button onClick={()=>dispatch(handledone(el.id))}>{el.isDone ? 'Undone':'Done'}</button>
            <button onClick={()=>dispatch(handledelete(el.id))}>Delete</button>
        </div>
    )
}

export default Cardlist