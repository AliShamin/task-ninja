import "./Card.css"
import { VscListSelection } from "react-icons/vsc";
import { MdModeEdit } from "react-icons/md"
import { MdDelete } from "react-icons/md";
import { FaUserNinja } from "react-icons/fa";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { deleteCard, editCard } from "../../core/redux/cardSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState, ref, useRef } from "react";
import { openViewCard, closeViewCard } from "../../core/redux/viewCardSlice";
import { openEditCard } from "../../core/redux/editCardSlice";
import { useSelector } from "react-redux";
import { openNotificationModal } from "../../core/redux/modalSlice";
import useOutsideAlerter from "../../core/helpers/outsideAlerter";
import { askNotificationPermission } from "../../core/service/notificationService";


function Card(props) {
    const dispatch = useDispatch();
    const [showOptions, setShowOptions] = useState(false);
    const [isCardImp, setIsCardImp] = useState(props.data.isImp);
    const viewCardId = useSelector(state => state.viewCard.cardId);
    const ref = useRef(null);

    useOutsideAlerter((e) => {
        if (ref.current != null && !ref.current.contains(e.target)) { setShowOptions(false) }
    })

    const cardActions = (actionType) => {
        if (actionType == 'delete') {
            if (viewCardId == props.data.id) {
                dispatch(closeViewCard());
            }
            dispatch(deleteCard(props.data.id))
        } else if (actionType == 'view') {
            dispatch(openViewCard(props.data.id));
        } else if (actionType == 'edit') {
            dispatch(openEditCard(props.data.id))
        } else if (actionType == 'notifyMe') {
            if (Notification.permission === 'granted')
                dispatch(openNotificationModal(props.data))
            else{
                askNotificationPermission();
            }    
        }
    }

    const handelOptionsClick = (e) => {
        showOptions ? setShowOptions(false) : setShowOptions(true)
        e.stopPropagation();
    }

    useEffect(() => {
        dispatch(editCard({ ...props.data, 'isImp': isCardImp }))
    }, [isCardImp])

    return (
        <>
            <section className="card-container" key={props.data.id}>
                <header className="d-flex-row space-btw">
                    <FaUserNinja />
                    <div className="d-flex-row space-btw w30">
                        {isCardImp ? <AiFillStar color='gold' onClick={() => { setIsCardImp(false) }} size='18' /> : <AiOutlineStar onClick={() => { setIsCardImp(true) }} size='18' />}
                        <div onClick={handelOptionsClick}>
                            <VscListSelection />
                            {showOptions && <div id="options-container" ref={ref}>
                                <div onClick={() => { cardActions('edit') }}><MdModeEdit /><span>Edit</span></div>
                                <div onClick={() => { cardActions('notifyMe') }}><IoMdNotifications /><span>Notify</span></div>
                                <div onClick={() => { cardActions('delete') }}><MdDelete /><span>Delete</span></div>
                            </div>
                            }
                        </div>
                    </div>
                </header>
                <section className="d-flex-column" onClick={() => { cardActions('view') }} >
                    <span className="f14 w80">{props.data.cardTitle}</span>
                    <span className="f12">{props.data.creationDate}</span>
                    <span className="f12">{props.data.cardType}</span>
                </section>
            </section>
        </>
    )
}

export default Card;