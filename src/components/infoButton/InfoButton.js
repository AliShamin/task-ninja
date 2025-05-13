import { CgInfo } from "react-icons/cg";
import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom';

function InfoButton() {
    return (
        <>
         <Link to="/about">
            <CgInfo size='20' className="mlr8px cursor-pointer" data-tooltip-id="my-info" data-tooltip-content="Info"/>
            <Tooltip id="my-info"/>
         </Link> {/* Link to About Page */}
         </>
    )
}

export default InfoButton;