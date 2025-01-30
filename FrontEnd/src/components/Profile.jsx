import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faDownload } from "@fortawesome/free-solid-svg-icons"; // Solid icon for Envelope
import {
    faGithub,
    faLinkedinIn,
    faInstagram,
    faFacebookF
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
    const typedElement = useRef(null)
    const typedInstance = useRef(null)

    useEffect(() => {
        typedInstance.current = new Typed(typedElement.current, {
            strings: ["Full-Stack Web Developer", 'MERN-Stack Developer'],
            typeSpeed: 120,
            backSpeed: 120,
            loop: true
        })

        return () => {
            typedInstance.current.destroy();
        };

    }, [])

    return (
        <div id="about" className="main summary">

            <div className="left">
                <div className="profile_photo">
                    <img src="./Profile Logo/IMG_06571.webp" className="profile" />
                    <a href="./Resume_vijay_jadhav.pdf" download="Resume_vijay_jadhav.pdf.pdf">
                        <button>
                            CHECK RESUME <FontAwesomeIcon icon={faDownload} />
                        </button>
                    </a>
                </div>
            </div>


            <div className="right">
                <span style={{ color: "grey" }}> Greetings, Friend !</span>
                <h1 style={{ color: "white" }}>
                    Hello, my name is, <br />
                    <span>Vijay Jadhav.</span>
                </h1>
                <div className="textContainer">
                    <h1 className="h1Div">
                        <>I'am a </>
                        <span ref={typedElement} className="auto-type"></span>
                    </h1>
                </div>
                <p style={{ color: "grey" }}>
                    Dynamic Full Stack Web Developer with a strong foundation in both
                    front-end and back-end technologies.
                </p>

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
            </div>
        </div>
    )

}


export default Profile