import { FaBars } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";
import useOutsideAlerter from "../../core/helpers/outsideAlerter";
import { FaUpload, FaDownload, FaPlus, FaTrash } from 'react-icons/fa';
import { VscBellDot, VscBell } from "react-icons/vsc";
import { useDispatch } from 'react-redux'
import { openModal } from "../../core/redux/modalSlice";
import { deleteAllCard } from '../../core/redux/cardSlice';


function InfoButton() {
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    // const handleClick = () => {
    // navigate('/about'); // or navigate('https://external.com') for full URLs
    // };

    useOutsideAlerter((e) => {
        if (ref.current != null && !ref.current.contains(e.target)) { setShowOptions(false) }
    })

    const handelOptionsClick = (e) => {
        showOptions ? setShowOptions(false) : setShowOptions(true)
        e.stopPropagation();
    }

    return (
        <>
            <span className="plr1 cursor-pointer" onClick={handelOptionsClick}>
                <FaBars size='18' color="#333" />
                {showOptions && <div className="options-container" ref={ref}>
                    <div onClick={() => dispatch(openModal())}><FaPlus/>Create</div>
                    {/* <div><FaUpload/><span>Upload</span></div>
                    <div><FaDownload/><span>Download</span></div>
                    <div><VscBellDot /><span>Notification</span></div> */}
                    <div onClick={()=>{
                        const confirm = window.confirm("This will delete all your cards! You want to go ahead ?");
                        if(confirm){
                            dispatch(deleteAllCard())
                        }
                    }}><FaTrash /><span>Delete</span></div>
                </div>
                }
            </span>
        </>
    )
}

export default InfoButton;