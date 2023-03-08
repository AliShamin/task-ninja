import { VscBellDot, VscBell } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { openExistingNotificationModal } from "../../core/redux/modalSlice";
import { useSelector } from "react-redux";
import { Tooltip } from 'react-tooltip'

function NotificationButton() {
    const dispatch = useDispatch();
    const existingReminders = useSelector(state => state.reminder.reminders);

    return (
        <>
            <div className="align-center plr1" data-tooltip-id="my-tooltip" data-tooltip-content="Notifications">
                {existingReminders.length > 0 ?
                    <VscBellDot className="cursor-pointer" size='20' onClick={() => { dispatch(openExistingNotificationModal()) }} />
                    :
                    <VscBell className="cursor-pointer" size='20' onClick={() => { alert('You have no existing reminders') }} />
                }
                <Tooltip id="my-tooltip"/>
            </div>
        </>
    )
}

export default NotificationButton;