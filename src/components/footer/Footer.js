import "./Footer.css"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import useThemeService from "../../core/service/themeService";
import { useRef } from "react";

const linkedinUrl = "https://www.linkedin.com/in/shamin-ali/";
const githubUrl = "https://github.com/AliShamin/task-ninja"

function Footer() {
    const themeRef = useRef();
    useThemeService(themeRef,'dark-box');
    return (<>
        <footer ref={themeRef} className="footer-box align-center bg-grey">
            <div className="d-flex-row space-btw w80">
                <span>&nbsp;Made with &#128151; by Shamin Ali</span>
                <div className="d-flex-row space-btw">
                    {/* {/* <a className="mlr8px" href={githubUrl} target='_blank'>
                        <BsGithub size='18' color='black' /></a> */}
                   Reach out to me on Linkedin for feedbacks <a className="mlr8px" href={linkedinUrl} target='_blank' >
                    <BsLinkedin size='18' color='black'/>
                    </a>
                </div>
            </div>
        </footer>
    </>)
}

export default Footer;