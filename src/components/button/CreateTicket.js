import "./Button.css";
import { useDispatch } from 'react-redux'
import { openModal } from "../../core/redux/modalSlice";
import { Tooltip } from "react-tooltip";
function CreateTicket() {
    const dispatch = useDispatch()
    return (
        <>
            <button className="btn-primary"  onClick={() => dispatch(openModal())} data-tooltip-id="my-tooltip" data-tooltip-content="Create a new ticket">
                Create
            </button>
            <Tooltip id="my-tooltip"/>
        </>
    )
}

export default CreateTicket;