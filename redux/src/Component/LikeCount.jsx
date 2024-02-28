import { useDispatch, useSelector } from "react-redux";
import ActionType from "./Action.jsx"; 

function Like(){
    const counter = useSelector((state) => {
        return state
      })
      const dispatch = useDispatch()

    return(
        <div>
            <div>
                <p>{counter}</p>
                <div className="btn">
                    <button onClick={() => {dispatch(ActionType.Increase())}}>Like</button>
                    <button onClick={() => {dispatch(ActionType.Decrease())}}>Unlike</button>
                </div>
            </div>
        </div>
    )
}

export default Like;
