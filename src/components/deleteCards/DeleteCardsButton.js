import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllCard } from '../../core/redux/cardSlice';
import { Tooltip } from 'react-tooltip';

function DeleteCardsButton() {
    const items = useSelector((state) => state.card.item);
    const dispatch = useDispatch();
    const handleClick = () => {
        const confirm = window.confirm("This will delete all your cards! You want to go ahead ?");
        if(confirm){
            dispatch(deleteAllCard())
        }
    }
    return (
        <>
            <div className='cursor-pointer align-center plr1' data-tooltip-id="toggle-tooltip" data-tooltip-content="Delete All Cards">
                  <FaTrash size='18' onClick={handleClick} className={items.length === 0 ? "disabled-link":""}/>
            </div>
            <Tooltip id='toggle-tooltip' />
        </>
    )
}

export default DeleteCardsButton;