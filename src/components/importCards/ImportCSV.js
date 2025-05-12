import React, { useState, useRef } from "react";
import Papa from "papaparse";
import { FaUpload } from 'react-icons/fa';

const ImportCSV = ({ onDataParsed }) => {
    const [csvFile, setCsvFile] = useState(null);
    const [error, setError] = useState('');
    const fileInputRef = useRef(null);
    
    const handleClick = ()=>{
        fileInputRef.current.click();
    }

    const handleFileChange = (e) => {
        setCsvFile(e.target.files[0]);
        setError('');
        Papa.parse(e.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                console.log("import complete", results)
                onDataParsed(results.data)
            },
            error: (err) => {
                // setError(`Parsing error:${err.message}`);
            }
        });
    };

    return (
        <div>
            <FaUpload size='18' onClick={handleClick}></FaUpload>
            <input type="file" 
                   accept=".csv"
                   ref = {fileInputRef}
                   style={{display:'none'}}
                   onChange={handleFileChange}
                   ></input>
        </div>
    )
};
export default ImportCSV;