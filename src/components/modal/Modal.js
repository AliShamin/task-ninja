import "./Modal.css";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { closeModal } from "../../core/redux/modalSlice";
import { addCard } from "../../core/redux/cardSlice";
import { INPUT_LIMIT, ticketType } from "../../core/constant/constants";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from 'react-redux'
import {getDate} from "../../core/helpers/commonUtil";
import uuid from 'react-uuid';

function Modal() {
    const isModalOpen = useSelector((state) => state.modal.isModalOpen)
    const [currentCardState, setCurrentCardState] = useState({cardType:ticketType[0]});
    const dispatch = useDispatch();
    const currentDate = getDate();
    const addCardItem = () => {
        dispatch(addCard(
            {
                id: uuid(),
                cardType: currentCardState.cardType,
                cardTitle: currentCardState.cardTitle,
                textData: currentCardState.textData,
                creationDate: currentDate,
                isImp: false
            }));
        dispatch(closeModal());
        setCurrentCardState({ ...currentCardState, cardType:ticketType[0]});
    }

    const handleChange = (k, v) => {
        setCurrentCardState({ ...currentCardState, [k]: v });
    }

    return (
        <> {
            isModalOpen &&
            <section className="align-center">
                <div className="modal-container sticky">
                    <div className="box d-flex-row space-btw">
                        <h3>Enter card details</h3>
                        <div onClick={() => dispatch(closeModal())} className="cursor-pointer"><AiOutlineCloseCircle size={24} /></div>
                    </div>
                    <form className="modal-body" onSubmit={addCardItem} >
                        <div className="d-flex-row box">
                            <span className="w30">Card Title</span>
                            <input placeholder="Enter card title" onChange={(e) => { handleChange("cardTitle", e.target.value.slice(0,INPUT_LIMIT))}} required />
                        </div>
                        <div className="d-flex-row box">
                            <span className="w30">Card Type</span>
                            <div>
                                <select defaultValue={ticketType[0]} className="option-item" onClick={(e) => { handleChange("cardType", e.target.value) }}>
                                    {ticketType.map((e) =>
                                        <option className="option-item" key={e} value={e}>{e}</option>
                                    )}
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
                            <span>Description</span>
                            <textarea className="modal-textarea" onChange={(e) => { handleChange('textData', e.target.value) }}></textarea>
                        </div>
                        <div className="box">
                            <button type="submit" className="btn-primary">Add</button>
                        </div>
                    </form>
                </div>
            </section>
        }
        </>
    );
}

export default Modal;