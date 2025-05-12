import { FaDownload } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { Tooltip } from 'react-tooltip';
import { CSVLink } from "react-csv";
import { useState } from 'react';

function ExportCards() {
    const items = useSelector((state) => state.card.item);
    const [download, setDownload] = useState(false);
    const handleClick = () => {
        setDownload(true)
    }
    const headers = [
        { label: "CardTitle", key: "cardTitle" },
        { label: "CardType", key: "cardType" },
        { label: "CreationDate", key: "creationDate" },
        { label: "Id", key: "id" },
        { label: "IsImp", key: "isImp" },
        { label: "TextData", key: "textData" }
    ]
    const fileName = "TaskNinja_" + Date.now() + ".csv";
    const csvReport = {
        data: items,
        header: headers,
        filename: fileName
    }
    return (
        <>
            <div className='cursor-pointer align-center plr1' data-tooltip-id="toggle-tooltip" data-tooltip-content="Export Cards in .csv">
               
                <CSVLink data={csvReport.data} filename={csvReport.filename} style={{color:'inherit'}}><FaDownload size='18' onClick={handleClick} /></CSVLink>
            </div>
            <Tooltip id='toggle-tooltip' />
        </>
    )
}

export default ExportCards;