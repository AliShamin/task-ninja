import "../modal/Modal.css";
import React from 'react';
import { useDispatch } from 'react-redux'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CgMaximizeAlt } from 'react-icons/cg';
import { useSelector } from 'react-redux'
import { closeViewCard } from "../../core/redux/viewCardSlice";
import { getCardById } from "../../core/service/cardService";
import MaxViewModal from "../maxViewModal/MaxViewModal";
import { openMaxViewModal } from "../../core/redux/modalSlice";

function ViewCard() {
    const isMaxModalOpen = useSelector((state) => state.modal.maxViewModal.isModalOpen);
    const dispatch = useDispatch();
    const items = useSelector(state => state.card.item);
    const isViewCardOpen = useSelector(state => state.viewCard.showViewCard)
    const cardId = useSelector(state => state.viewCard.cardId)
    const item = getCardById(items, cardId);

    return (
        <>  
        <section className="align-center">
            <div className="modal-container sticky">
                <div className="box d-flex-row space-btw">
                    <h3>Card Details</h3>
                    <div onClick={() => dispatch(closeViewCard())} className='cursor-pointer'><AiOutlineCloseCircle size={24} /></div>
                </div>
                <div className="modal-body">
                    <div className="d-flex-row box">
                        <span className="w30">Card Title</span>
                        <div>{item.cardTitle}</div>
                    </div>
                    <div className="d-flex-row box">
                        <span className="w30">Card Type</span>
                        <div>
                            {item.cardType}
                        </div>
                    </div>
                    <div className="d-flex-row box">
                        <span className="w30">Creation Date</span>
                        <div>
                            {item.creationDate}
                        </div>
                    </div>
                    <div className="d-flex-column box">
                        <span>Description</span>
                        <textarea className="modal-textarea" value={item.textData} spellCheck="false" style={{ caretColor: 'transparent' }} readOnly />
                        <div className="d-flex-row-reverse w100">
                            <CgMaximizeAlt className="cursor-pointer" size='20' onClick={() => { dispatch(openMaxViewModal({ 'isEditable': false })) }} />
                        </div>
                    </div>
                </div>
                {isMaxModalOpen && <MaxViewModal item={item} />}
            </div>
        </section>
        </>
    );
}

export default ViewCard;