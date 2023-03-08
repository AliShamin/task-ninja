import { BsToggleOff, BsToggleOn } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { switchToDarkMode, switchToLightMode } from '../../core/redux/modalSlice';
import { Tooltip } from 'react-tooltip';

function ToggleModeButton() {
    const isDarkMode = useSelector((state) => state.modal.isDarkMode)
    const dispatch = useDispatch();
    const handleClick = () => {
        if (isDarkMode) {
            dispatch(switchToLightMode())
        } else {
            dispatch(switchToDarkMode())
        }
    }
    return (
        <>
            <div className='cursor-pointer' data-tooltip-id="toggle-tooltip" data-tooltip-content="Switch mode">{isDarkMode ? <BsToggleOn size='24' onClick={handleClick} /> : <BsToggleOff size='24' onClick={handleClick} />}
            </div>
            <Tooltip id='toggle-tooltip' />
        </>
    )
}

export default ToggleModeButton;