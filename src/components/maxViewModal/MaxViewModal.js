import "./MaxViewModal.css";
import { useDispatch } from 'react-redux'
import { closeMaxViewModal } from "../../core/redux/modalSlice";
import { BiArrowBack } from "react-icons/bi";
import { useSelector } from 'react-redux'

function MaxViewModal(props) {
    const isEditable = useSelector((state) => state.modal.maxViewModal.isEditable)
    const dispatch = useDispatch();
    const save = () => {
        props.save(props.item.textData)
        dispatch(closeMaxViewModal());
    }

    return (
        <>
            <section className="align-center mt10">
                <div className="max-modal-container sticky">
                    <div className="box d-flex-row space-btw">
                        <div onClick={() => dispatch(closeMaxViewModal())}><BiArrowBack className="cursor-pointer" size={24} /></div>
                    </div>
                    {isEditable ?
                        <form className="max-modal-body" onSubmit={save}>
                            <div className="d-flex-column box">
                                <span>Description</span>
                                <textarea className="max-modal-textarea" defaultValue={props.item.textData} onChange={(e) => { props.item.textData = e.target.value }}  ></textarea>
                            </div>
                        </form> :
                        <div className="max-modal-body">
                            <div className="d-flex-column box">
                                <span>Description</span>
                                <textarea className="max-modal-textarea" defaultValue={props.item.textData} readOnly></textarea>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    );
}

export default MaxViewModal;