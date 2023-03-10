import "./Footer.css"
import { BsGithub, BsLinkedin } from "react-icons/bs";
import useThemeService from "../../core/service/themeService";
import { useRef } from "react";

const linkedinUrl = "https://www.linkedin.com/in/shamin-ali/";
const githubUrl = "https://github.com/AliShamin/task-ninja"

function Footer() {
    const themeRef = useRef();
    useThemeService(themeRef);
    return (<>
        <section ref={themeRef} className="footer-box">
            <div className="d-flex-row space-btw">
                <span className="mlr8px">Made with &#128151; by Shamin Ali</span>
                <div className="d-flex-row space-btw">
                    <a className="mlr8px" href={githubUrl} target='_blank'>
                        <BsGithub size='18' color='black' /></a>
                    <a className="mlr8px" href={linkedinUrl} target='_blank' ><BsLinkedin size='18' color='black'/></a>
                </div>
            </div>
        </section>
    </>)
}

export default Footer;