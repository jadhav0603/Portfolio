const Skills = ()=>{
    return(
        <div id="skills" className="skills_container">
        <h1 style={{margin: "auto"}}><u>Skills</u></h1>
        <p style={{margin: "auto", padding: "2vw"}}>
          Here are some of my skill on which i have been working....
        </p>

        <div className="skills_body">
          <div className="skills">
            <div className="skills_heading">
              <h1>Frontend</h1>
            </div>
            <div className="skills_list">
              <li><img src="./Skill Logo/HTML.png" />HTML</li>
              <li><img src="./Skill Logo/CSS.png" /> CSS</li>
              <li><img src="./Skill Logo/JS.png" /> JavaScript</li>
              <li><img src="./Skill Logo/REACT.png" /> React JS</li>
              <li><img src="./Skill Logo/TAILWIND.png" /> Tailwind CSS</li>
            </div>
          </div>

          <div className="skills">
            <div className="skills_heading">
              <h1>Backend</h1>
            </div>
            <div className="skills_list">
              <li>
                <img
                  src="./Skill Logo/NODE.png"
                  style={{backgroundColor: "white"}}
                />
                Node Js
              </li>
              <li><img src="./Skill Logo/EXPRESS.png" /> Express Js</li>
              <li><img src="./Skill Logo/MONGO.png" /> MongoDB</li>
            </div>
          </div>

          <div className="skills">
            <div className="skills_heading">
              <h1>Others</h1>
            </div>
            <div className="skills_list">
              <li>
                <img
                  src="./Skill Logo/github-logo.png"
                  style={{backgroundColor: "white", borderRadius: "50%"}}
                />
                Git
              </li>
              <li><img src="./Skill Logo/vs-code.png" /> VS Code</li>
              <li><img src="./Skill Logo/postman.png" /> Postman</li>
              <li><img src="./Skill Logo/photoshop.png" /> Adobe Photoshop</li>
            </div>
          </div>

          <img
            src="./Skill Logo/git contribution.png"
            style={{
              borderRadius: "20px",
              width: "70vw",
              boxShadow: "rgba(140, 140, 209, 0.25) 0px 50px 100px -20px,rgba(214, 186, 186, 0.3) 0px 30px 60px -30px,rgba(186, 209, 233, 0.35) 0px -2px 6px 0px inset"
            }}
          />
        </div>
      </div>
    )
}

export default Skills