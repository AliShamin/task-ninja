import "./Avatar.css";
import {FaUserNinja} from "react-icons/fa";
import { useState } from "react";
import { saveItem, getItem } from "../../core/helpers/localStorageUtils";
import { Tooltip } from "react-tooltip";

function Avatar() {
    const [showAvatarInput, setShowAvatarInput] = useState(false);
    const userNameFromLocal = getItem('userName') == null || getItem('userName') == '' ? 'Username' : getItem('userName');
    const [userName, setUsername] = useState(userNameFromLocal);

    const saveChanges = () => {
        setShowAvatarInput(false);
        saveItem('userName', userName);
    }

    return (
        <>
            <div className="p-relative d-flex-row align-center cursor-pointer" id='avatar-container'>
                <span className="curved-box">{userName}</span>
                <FaUserNinja size='20' onClick={() => { setShowAvatarInput(true) }} data-tooltip-id="my-tooltip" data-tooltip-content="Set Username"/>
                {showAvatarInput && <section id="avatar-input-container">
                    <input id='avatar-input' placeholder="Username" value={userName} onChange={(e) => { setUsername(e.target.value.slice(0, 15)) }} />
                    <button className="btn-secondary" onClick={saveChanges}>Save</button>
                </section>
                }
                <Tooltip id="my-tooltip"/>
            </div>
        </>
    )
}

export default Avatar;