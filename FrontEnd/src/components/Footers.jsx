import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid icon for Envelope
import {
    faGithub,
    faLinkedinIn,
    faInstagram,
    faFacebookF
} from "@fortawesome/free-brands-svg-icons";

const Footers = () => {

    return (
        <div className="footerContainer">

            <h3>Vijay Jadhav</h3>
            <div className="navbarLists footerNav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#educations">Education</a></li>
                </ul>
            </div>

            <div className="social-icons" style={{ color: "grey" }}>
                <a href="https://github.com/masai-course/vijay_jadhav_cap08_010">
                    {/* <i className="fa-brands fa-github"></i> */}
                    <FontAwesomeIcon className="socialMedia" icon={faGithub} />
                </a>
                <a href="mailto:jadhavvijay0808@gmail.com">
                    {/* <i className="fa-solid fa-envelope"></i> */}
                    <FontAwesomeIcon className="socialMedia" icon={faEnvelope} />
                </a>
                <a href="http://linkedin.com/in/vijay-jadhav-a24133259">
                    <FontAwesomeIcon className="socialMedia" icon={faLinkedinIn} />
                </a>
                <a href="https://www.instagram.com/vijay_j_0603?igsh=MWYyZXFudWIwZXQzeQ%3D%3D&utm_source=qr">
                    <FontAwesomeIcon className="socialMedia" icon={faInstagram} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100010576969530&mibextid=LQQJ4d">
                    <FontAwesomeIcon className="socialMedia" icon={faFacebookF} />
                </a>
            </div>

            <p>Copyright © 2024 Vijay Jadhav</p>
        </div>


    )

}


export default Footers