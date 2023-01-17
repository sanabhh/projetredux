import { useSelector } from "react-redux"
import Cardlist from "./Cardlist"

const Todolist =()=>{

    const Tasks = useSelector(state=>state.Tasks)

    return (
        <div>
            {
                Tasks.map(el=><Cardlist el={el}/>)
            }

        </div>
    )
}

export default Todolist