import "./Header.css";
import logo from "../../static/task-logo.png";
import Button from "../button/Button";
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
            <header ref={themeRef} className="header-container container sticky align-center ">
                <div className="w80 d-flex-row align-center space-btw">
                    <div className="align-center space-btw cursor-pointer">
                        <div className="d-flex-row font-style-1 plr2" onClick={handleClick}>
                            <img id="header_img" src={logo} />
                            <span id="header-title">Task Ninja</span>
                        </div>
                    </div>
                    <div className="align-center w40 space-btw">
                        <ImportCards />
                        <ExportCards />
                        {/* <ToggleModeButton/> */}
                        <NotificationButton />
                        <Button />
                        <DeleteCardsButton />
                        <Avatar />
                        <InfoButton />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;