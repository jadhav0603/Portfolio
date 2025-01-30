import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  return (
    <div id="projects" className="projectContainer">
      <h1
        style={{ margin: "auto", color: "burlywood", padding: "5vw", fontSize: "2.5vw" }}
      >
        <u>Projects</u>
      </h1>

      <div className="cardContainer">

        <div className="card">
          <img src="./projects/bluefly.webp" alt="" />
          <div className="content">
            <div className="title"><u>Bluefly Clone</u></div>
            <div className="discription">
              Implemented product search, sorting, and dynamic
              categories, along with a custom JSON-based API for ecient
              product management.
              Integrated user authentication, favorites functionality, and
              responsive design for a seamless and secure shopping
              experience <br />
            </div>
            <div>
              <a href="https://github.com/jadhav0603/bluefly.com-Clone">
                <p> <u> View In GitHub </u> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </p>
              </a>
            </div>
            <div className="button">
              <a href="https://bluefly-com-clone-frontend.onrender.com/">
                <button>VISIT PROJECT</button>
              </a>
            </div>
          </div>
        </div>


        <div className="card">
          <img src="./projects/croma.webp" alt="" />
          <div className="content">
            <div className="title"><u>Croma E-Commerce Clone</u></div>
            <div className="discription">
              A full-stack e-commerce web application replicating the features
              of the Croma online store, built using modern web technologies.
              Includes functionalities like product browsing, filtering, and
              cart management. <br />
              {/* <b><u>Key Features : </u></b>
                <ul>
                  <li>User authentication and authorization.</li>
                  <li>Responsive UI/UX for desktop and mobile views</li>
                  <li>
                    Data fetching and management using MongoDB and Node.js
                  </li>
                </ul>
                <b><u> Tech Stack : </u></b>
                <ul>
                  <li>
                    <b><u>Frontend : </u></b> HTML, CSS, JavaScript, React.js.
                  </li>
                  <li>
                    <b><u>Backend : </u></b> Node.js, Express.js, MongoDB,
                    Mongoose.
                  </li>
                  <li>
                    <b><u>Tools: </u></b> Git, Postman, Vercel (for deployment).
                  </li>
                </ul> */}
            </div>
            <div>
              <a href="https://github.com/jadhav0603/Croma-Clone">
                <p> <u> View In GitHub </u> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </p>
              </a>
            </div>
            <div className="button">
              <a href="https://croma-clone-frontend.onrender.com/">
                <button>VISIT PROJECT</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="./projects/sugarcosmetics.webp" alt="" />
          <div className="content">
            <div className="title"><u>Sugar Cosmetics Clone</u></div>
            <div className="discription">
              A replica of the Sugar Cosmetics website, designed to showcase
              beauty products with an interactive UI and a smooth user
              experience. Includes features like product search, category-wise
              navigation, and a user-friendly checkout process. <br />
              {/* <b><u>Key Features : </u></b>
                <ul>
                  <li>Advanced product filtering and sorting.</li>
                  <li>Login and sign-up with secure user data handling.</li>
                  <li>Integration of modern frontend libraries for a visually <br/>
                    appealing design.
                  </li>
                </ul>
                <b><u> Tech Stack : </u></b>
                <ul>
                  <li>
                    <b><u>Frontend : </u></b> HTML, CSS, JavaScript, React.js.
                  </li>
                  <li>
                    <b><u>Backend : </u></b> Node.js, Express.js, MongoDB,
                    Mongoose.
                  </li>
                  <li>
                    <b><u>Tools: </u></b> Git, Postman, Vercel (for deployment).
                  </li>
                </ul> */}
            </div>
            <div>
              <a href="https://github.com/jadhav0603/Sugar-Cosmetics-clone">
                <p> <u> View In GitHub </u> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </p>
              </a>
            </div>
            <div className="button">
              <a href="https://sugar-cosmeticsclone.vercel.app/">
                <button>VISIT PROJECT</button>
              </a>
            </div>
          </div>
        </div>

        <div className="card">
          <img src="./projects/bigbasket.webp" alt="" />
          <div className="content">
            <div className="title"><u>Big-basket Clone</u></div>
            <div className="discription">
              A grocery delivery application mimicking the Big Basket
              platform. Features include a searchable product catalog,
              category-wise browsing, and an intuitive user interface for
              seamless shopping. <br />
              {/* <b><u>Key Features : </u></b>
                <ul>
                  <li>Comprehensive product search with auto-suggestions.</li>
                  <li>Dynamic cart and checkout system.</li>
                  <li>Backend APIs for data retrieval and management.</li>
                </ul>
                <b><u> Tech Stack : </u></b>
                <ul>
                  <li>
                    <b><u>Frontend : </u></b> HTML, CSS, JavaScript, React.js.
                  </li>
                  <li>
                    <b><u>Backend : </u></b> Node.js, Express.js, MongoDB,
                    Mongoose.
                  </li>
                  <li>
                    <b><u>Tools: </u></b> Git, Postman, Vercel (for deployment).
                  </li>
                </ul> */}
            </div>
            <div>
              <a href="https://github.com/jadhav0603/BigBasket-Clone">
                <p> <u> View In GitHub </u> <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> </p>
              </a>
            </div>
            <div className="button">
              <a href="https://bigbasketecommerceclone.netlify.app/index.html">
                <button>VISIT PROJECT</button>
              </a>
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}


export default Project