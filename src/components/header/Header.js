import "./Header.css";
import logo from "../../static/task-logo.png";
import CreateTicket from "../button/CreateTicket";
import Avatar from "../avatar/Avatar";
import NotificationButton from "../notificationButton/NotificationButton";
import InfoButton from "../infoButton/InfoButton";
import ToggleModeButton from "../toggleModeButton/ToggleModeButton";
import useThemeService from "../../core/service/themeService";
import { useRef } from "react";
import DeleteCardsButton from "../deleteCards/DeleteCardsButton";
import ExportCards from "../exportCards/ExportCards";
import ImportCards from "../importCards/ImportCards";
import { useNavigate } from 'react-router-dom';

function Header() {
    const themeRef = useRef();
    useThemeService(themeRef, 'dark-box');
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/'); // or navigate('https://external.com') for full URLs
    };

    return (
        <>
            <header ref={themeRef} className="header-container container sticky">
                <div className="w80 d-flex-row space-btw">
                    <div className="align-center space-btw cursor-pointer">
                        <div className="d-flex-row font-style-1 plr2" onClick={handleClick}>
                            <img id="header_img" src={logo} />
                            <span id="header-title">Task Ninja</span>
                        </div>
                    </div>
                    <div className="space-btw d-flex-row align-center">
                        <div className="align-center" id="header-nav-items">
                            <ImportCards />
                            <ExportCards />
                            <NotificationButton />
                            <CreateTicket />
                            <DeleteCardsButton />
                            <Avatar />
                        </div>
                        <InfoButton />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;