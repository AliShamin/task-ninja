import "./NotificationModal.css";
import { useDispatch } from "react-redux";
import { closeNotificationModal } from "../../core/redux/modalSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useState } from "react";
import { addReminder, deleteReminder } from "../../core/redux/reminderSlice";
import { useEffect } from "react";
import { checkDeadlines } from "../../core/service/notificationService";
import { months } from "../../core/constant/dateConstants";
import { validateReminder } from "../../core/helpers/commonUtil";

function NotificationModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector(state => state.modal.notificationModal.isModalOpen);
    const notificationModalId = useSelector(state => state.modal.notificationModal.id);
    const notificationTitle = useSelector(state => state.modal.notificationModal.title);
    const existingReminders = useSelector(state => state.reminder.reminders);
    const [reminder, setReminder] = useState();
    const [showReminder, setShowReminder] = useState(false);
    const [isInvalidTime, setIsInvalidTime] = useState(false);
    /**
     * Load data from storage on initialization
     */
    useEffect(() => {
        const existingReminder = existingReminders.filter(e => e.id == notificationModalId)[0]
        if (existingReminder) {
            setShowReminder(true);
            setReminder(existingReminder)
        } else {
            setShowReminder(false);
            setReminder();
        }
    }, [notificationModalId, existingReminders])

    const changeReminder = (e) => {
        e.preventDefault();
        setDefaultValues();
        if (!validateReminder(reminder)) {
            setIsInvalidTime(true);
            return;
        } else {
            setIsInvalidTime(false);
        }
        /**
         * add reminder into store
         */
        if (reminder) {
            dispatch(addReminder({ ...reminder, 'id': notificationModalId }))
            setNotification(reminder);
        }
        setShowReminder(true);
    }

    const changeReminderAttributes = (k, v) => {
        setReminder({ ...reminder, [k]: v })
    }

    const deleteReminderChange = () => {
        dispatch(deleteReminder(notificationModalId))
        setReminder();
        setShowReminder(false);
    }

    const closeModal = () => {
        dispatch(closeNotificationModal())
    }

    const setNotification = (reminder) => {
        const timer = setInterval(() => {
            if (checkDeadlines(reminder)) {
                clearInterval(timer);
                deleteReminderChange();
            }
        }, 1000);
    }

    const setDefaultValues = () => {
        if (!reminder.title)
            reminder.title = notificationTitle;
        if (!reminder.day)
            reminder.day = 1;
        if (!reminder.month)
            reminder.month = "January";
        if (!reminder.year)
            reminder.year = new Date().getFullYear();
    }

    const daysOptions = () => {
        let options = []
        for (let i = 1; i <= 31; i++) {
            options.push(<option key={i} value={i}>{i < 10 ? '0' : ''}{i}</option>)
        }
        return options;
    }

    const monthOptions = () => {
        return months.map(e => <option value={e} key={e}>{e}</option>)
    }

    const yearOptions = () => {
        const date = new Date();
        const currentYear = date.getFullYear();
        let options = []
        for (let i = currentYear; i < currentYear + 5; i++) {
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    }

    return (
        <>
            {isModalOpen &&
                <section className="align-center">
                    <div className="modal-container sticky">

                        {!showReminder &&
                            <div>
                                <div className="box d-flex-row space-btw">
                                    <h3>Add Notification</h3>
                                    <div onClick={closeModal}><AiOutlineCloseCircle size={24} /></div>
                                </div>
                                <form className="modal-body" onSubmit={changeReminder}>
                                    <div className="d-flex-row box"><label className="w20" >Task title:</label><input defaultValue={notificationTitle} onChange={(e) => { changeReminderAttributes('title', e.target.value) }} className="w80" type="text" id="title" required /></div>
                                    <div className="d-flex-row box"><label className="w20" >Hours (hh):</label><input onChange={(e) => { changeReminderAttributes('hr', e.target.value) }} type="number" id="deadline-hours" required /></div>
                                    <div className="d-flex-row box"><label className="w20" >Mins (mm):</label><input onChange={(e) => { changeReminderAttributes('min', e.target.value) }} type="number" id="deadline-minutes" required /></div>
                                    <div className="d-flex-row box">
                                        <div className="d-flex-row box"><label className="mr-1" >Day:</label>
                                            <select onChange={(e) => { changeReminderAttributes('day', e.target.value) }} required>
                                                {daysOptions()}
                                            </select>
                                        </div>
                                        <div className="d-flex-row box"><label className="mr-1" >Month:</label>
                                            <select onChange={(e) => { changeReminderAttributes('month', e.target.value) }} required>
                                                {monthOptions()}
                                            </select>
                                        </div>
                                        <div className="d-flex-row box"><label className="mr-1">Year:</label>
                                            <select onChange={(e) => { changeReminderAttributes('year', e.target.value) }} required>
                                                {yearOptions()}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex-row box"><input type="submit" className="btn-primary" value="Add Reminder" /></div>
                                </form>
                            </div>
                        }
                        <div className="d-flex-row box">
                            {showReminder && <div className="d-flex-column space-btw box w100">
                                <div className="d-flex-row space-btw">
                                    <h3>Your active notification</h3>
                                    <div onClick={closeModal}><AiOutlineCloseCircle size={24} /></div>
                                </div>
                                <div className="d-flex-row space-btw mtb1">
                                    <div>
                                        <span>{reminder.title}</span>&nbsp;{reminder.hr}:{reminder.min},&nbsp;{reminder.month}&nbsp;{reminder.day}st&nbsp;{reminder.year}.
                                    </div>
                                    <MdDelete size={24} onClick={deleteReminderChange} />
                                </div>
                            </div>
                            }
                            {isInvalidTime && <span style={{ 'color': 'red' }}>Invalid Time!! Pls correct and try again.</span>}
                        </div>
                    </div>
                </section>
            }
        </>
    )
}



export default NotificationModal;