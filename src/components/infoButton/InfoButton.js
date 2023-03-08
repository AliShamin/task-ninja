import { CgInfo } from "react-icons/cg";
import { Tooltip } from 'react-tooltip'
import { openInfoModal } from "../../core/redux/modalSlice";
import { useDispatch } from "react-redux";

function InfoButton() {
    const dispatch = useDispatch();
    return (
        <>
            <CgInfo size='20' className="mlr8px cursor-pointer" data-tooltip-id="my-info" data-tooltip-content="Info" 
            onClick={()=>{dispatch(openInfoModal())}}/>
            <Tooltip id="my-info"/>
        </>
    )
}

export default InfoButton;