import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBriefcase, faCircleUp} from "@fortawesome/free-solid-svg-icons"

const Education = ()=>{
    return(
        <div id="educations" className="education_container">
        <h1 style={{width: "fit-content", margin: "auto"}}><u>Education</u></h1>

        <div style={{display: "flex"}}>
          <div>
            <div className="university">
              <div className="img">
                <img
                  src="./education/Masai_Logo.webp"
                  alt="masai logo"
                  style={{backgroundColor: "white"}}
                />
                <div style={{margin: "0vw 2vw"}}>
                  <h2>Masai School</h2>
                  <p><b>Full Stack Web Developer</b></p>
                  <p>Nov 2023 - Nov 2024</p>
                </div>
              </div>
              <div className="gradeDiv">
                <p><b>Grade : </b></p>
                <span
                  >I have completed Full-Stack Web developer degree from Masai
                  School.
                </span>
              </div>
            </div>

            <div className="university">
              <div className="img">
                <img src="./education/logo.jpg" alt="clg logo" />
                <div style={{margin: "0vw 2vw"}}>
                  <h2>Prof. Ramkrishna More ACS College</h2>
                  <p><b>Savitribai Phule university, Pune.</b></p>
                  <p>July 2019 - July 2020</p>
                </div>
              </div>
              <p><b>Grade : 58.60 % </b></p>
              <span
                >I have completed Bachelor's degree in Computer Science from
                prof. Ramkrishna More, Pune.
              </span>
            </div>

            <div className="university">
              <div className="img">
                <img src="./education/logo.webp" alt="12th clg logo" />
                <div style={{margin: "0vw 2vw"}}>
                  <h2>RJSPM College</h2>
                  <p><b>Higher Secondary Education (ISC).</b></p>
                  <p>Apr 2015 - Apr 2017</p>
                </div>
              </div>
              <p><b>Grade : 52.60 % </b></p>
              <span
                >I completed my className 12 high school on science stream education
                at RJSPM College, Pune
              </span>
            </div>
          </div>

          <div className="iconWay">
            <FontAwesomeIcon className="icons" icon={faBriefcase}/>
            {/* <i className="fa-solid fa-briefcase"></i> */}
            <div className="line"></div>
            <FontAwesomeIcon className="icons" icon={faCircleUp}/>
            {/* <i className="fa-solid fa-circle-up"></i> */}
            <div className="line"></div>
            <FontAwesomeIcon className="icons" icon={faCircleUp}/>
            {/* <i className="fa-solid fa-circle-up"></i> */}
          </div>
        </div>
      </div>

    )
}

export default Education