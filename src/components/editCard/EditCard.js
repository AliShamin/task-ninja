import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { editCard } from '../../core/redux/cardSlice';
import { ticketType } from "../../core/constant/constants";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgMaximizeAlt } from 'react-icons/cg';
import { useSelector } from 'react-redux'
import { getCardById } from '../../core/service/cardService';
import { getDate } from "../../core/helpers/commonUtil";
import { closeEditCard } from '../../core/redux/editCardSlice';
import { openMaxViewModal } from '../../core/redux/modalSlice';
import MaxViewModal from '../maxViewModal/MaxViewModal';

function EditCard() {
    const isMaxModalOpen = useSelector((state) => state.modal.maxViewModal.isModalOpen);
    const cardId = useSelector((state) => state.editCard.cardId)
    const items = useSelector(state => state.card.item);
    const [item, setItem] = useState(getCardById(items, cardId));
    const currentDate = getDate();
    const dispatch = useDispatch();

    const editCardItem = () => {
        dispatch(editCard(item))
        dispatch(closeEditCard());
    }

    const saveTextData = (text) => {
       setItem({...item,'textData':text})
    }

    return (
        <>
            <section className="align-center">
                <div className="modal-container sticky">
                    <div className="box d-flex-row space-btw">
                        <h3>Edit card details</h3>
                        <div onClick={() => dispatch(closeEditCard())} className='cursor-pointer'><AiOutlineCloseCircle size={24} /></div>
                    </div>
                    <div className="modal-body">
                        <div className="d-flex-row box">
                            <span className="w30">Card Title</span>
                            <input placeholder="Enter card title" defaultValue={item.cardTitle} onChange={(e) => { setItem({ ...item, 'cardTitle': e.target.value }) }} />
                        </div>
                        <div className="d-flex-row box">
                            <span className="w30">Card Type</span>
                            <div>
                                <select defaultValue={item.cardType} className="option-item" onClick={(e) => { setItem({ ...item, 'cardType': e.target.value }) }}>
                                    {ticketType.map((e) =>
                                        <option className="option-item" key={e} value={e}
                                        >
                                            {e}
                                        </option>
                                    )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="d-flex-row box">
                            <span className="w30">Creation Date</span>
                            <div>
                                {currentDate}
                            </div>
                        </div>
                        <div className="d-flex-column box">
                            <span>Add Description</span>
                            <textarea className='modal-textarea' onChange={(e) => { setItem({ ...item, 'textData': e.target.value }) }} value={item.textData}/>
                            <div className="d-flex-row-reverse w100">
                                <CgMaximizeAlt size='20' onClick={() => { dispatch(openMaxViewModal({ 'isEditable': true })) }} />
                            </div>
                        </div>
                        <div className="box">
                            <button className="btn-primary" onClick={() => { editCardItem() }}>Save</button>
                        </div>
                    </div>
                    {isMaxModalOpen &&
                        <MaxViewModal item={item} save={saveTextData} />
                    }
                </div>
            </section>
        </>
    );
}

export default EditCard;