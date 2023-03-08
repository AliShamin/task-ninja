import "./NotificationModal.css";
import { useDispatch } from "react-redux";
import { closeExistingNotificationModal } from "../../core/redux/modalSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { deleteReminder } from "../../core/redux/reminderSlice";

function ExistingNotificationModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.modal.existingNotificationModal.isModalOpen);
    const existingReminders = useSelector(state => state.reminder.reminders);
    const closeModal = () => {
        dispatch(closeExistingNotificationModal())
    }
    const deleteReminderChange = (id) => {
        dispatch(deleteReminder(id))
    }

    return (
        <>
            {isModalOpen &&
                <section className="align-center">
                    <div className="modal-container sticky">
                        <div className="d-flex-row box">
                            <div className="d-flex-column space-btw box w100">
                                <div className="d-flex-row space-btw">
                                    {existingReminders.length == 0 ? <h3>You have no active notifications</h3> : <h3>Your active notifications</h3>}
                                    <div onClick={closeModal}><AiOutlineCloseCircle size={24} /></div>
                                </div>
                                {existingReminders.map(reminder =>
                                    <div className="d-flex-row space-btw mtb1" key={reminder.id}>
                                        <div>
                                            <span>{reminder.title}</span>&nbsp;{reminder.hr}:{reminder.min},&nbsp;{reminder.month}&nbsp;{reminder.day}st&nbsp;{reminder.year}.
                                        </div>
                                        <MdDelete size={24} onClick={() => deleteReminderChange(reminder.id)} />
                                    </div>)
                                }
                            </div>

                        </div>
                    </div>
                </section>
            }
        </>
    )
}



export default ExistingNotificationModal;