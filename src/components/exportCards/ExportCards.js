import { FaDownload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import {CSVLink} from "react-csv";

function ExportCards() {
    const items = useSelector((state) => state.card.item);
    const handleClick = () => {
           console.log("all items:",items)
    }
    const headers = [
        {label:"CardTitle",key:"cardTitle"},
        {label:"CardType",key:"cardType"},
        {label:"CreationDate",key:"creationDate"},
        {label:"Id",key:"id"},
        {label:"IsImp",key:"isImp"},
        {label:"TextData",key:"textData"}
    ]
    const fileName = "TaskNinja_"+ Date.now() + ".csv";
    const csvReport = {
        data:items,
        header:headers,
        filename: fileName
    }
    return (
        <>
            <div className='cursor-pointer align-center plr1' data-tooltip-id="toggle-tooltip" data-tooltip-content="Export Cards in .csv">
                  {/* <FaDownload size='18' onClick={handleClick} /> */}
            <CSVLink {...csvReport}><FaDownload size='18' onClick={handleClick} /></CSVLink>
            </div>
            <Tooltip id='toggle-tooltip' />
        </>
    )
}

export default ExportCards;