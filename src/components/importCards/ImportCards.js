import { Tooltip } from 'react-tooltip';
import ImportCSV from './ImportCSV';
import { addAllCards } from "../../core/redux/cardSlice";
import { useDispatch } from 'react-redux';

function ImportCards() {
    const dispatch = useDispatch();
    const handleDataParsed = (data) => {
        console.log("parsed data", data)
        dispatch(addAllCards(data))
    }
    return (
        <>
            <div className='cursor-pointer align-center plr1' data-tooltip-id="toggle-tooltip" data-tooltip-content="Import Cards from .csv">
              <ImportCSV onDataParsed={handleDataParsed}></ImportCSV>
            </div>
            <Tooltip id='toggle-tooltip' />
        </>
    )
}

export default ImportCards;