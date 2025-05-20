import { useState } from "react"
import {MdDashboard} from "react-icons/md";
import "./OpenDashboard.css"
import {useNavigate} from 'react-router-dom'
const OpenDashboard= ()=>{
   const [openDashboard, setOpenDashboard] = useState(false);
   const navigate = useNavigate();
   const handleClick = ()=>{
     navigate('/dashboard')
   }
   return (
    <>
      <div className="align-center w100 mt10" onClick={handleClick}>
           <div className="align-center">
            <div className="align-center p1 space-btw cursor-pointer" id="dashboard-button">
                <h2 className="mr-1">Go To Dashboard</h2>
                <MdDashboard size='40'/>
                </div>
           </div>
      </div>
    </>
   );
}

export default OpenDashboard;