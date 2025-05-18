import { CgInfo } from "react-icons/cg";
import { Tooltip } from 'react-tooltip'
import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function InfoButton() {
    const navigate = useNavigate();
    const handleClick = () => {
    navigate('/about'); // or navigate('https://external.com') for full URLs
  };
    return (
        <>
            <span  className="plr1 cursor-pointer" data-tooltip-id="my-info" data-tooltip-content="Info"  onClick={handleClick}>
                <FaBars size='18' color="#333" />
            </span>
            {/* <FaBars size='20' color="black" className="mlr8px cursor-pointer" data-tooltip-id="my-info" data-tooltip-content="Info"/> */}
            <Tooltip id="my-info"/>
         </>
    )
}

export default InfoButton;