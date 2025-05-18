import { FaBars } from 'react-icons/fa';import { Tooltip } from 'react-tooltip'
import { Link } from 'react-router-dom';

function InfoButton() {
    return (
        <>
         <Link to="/about">
            <FaBars size='20' className="mlr8px cursor-pointer" data-tooltip-id="my-info" data-tooltip-content="Info"/>
         </Link> {/* Link to About Page */}
            <Tooltip id="my-info"/>
         </>
    )
}

export default InfoButton;