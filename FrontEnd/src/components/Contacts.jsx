// export default Contacts;
import * as React from 'react';
import Alert from '@mui/material/Alert';
// import CheckIcon from '@mui/icons-material/Check';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Solid icon for Envelope
import { useState } from "react";
import axios from "axios";
// import { Alert, AlertIcon, AlertTitle, AlertDescription } from "@chakra-ui/react"; // Import Alert from Chakra UI

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false); // State to control alert visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://portfolio-uy6w.onrender.com', { email, name, subject, message });
      console.log(response);
      if (response.status === 200) {
        setShowAlert(true); // Show alert on successful submission
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
       
        setTimeout(()=>{
          setShowAlert(false)
        },3000)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="contact" className="contactBody">
      <div className="contactContainer">
        <h2>Contact</h2>
       {showAlert && (
           <Alert severity="success">
           Form submitted successfully, Thank You!
         </Alert>
        )}
        
        <p>Feel free to reach out me for any questions or opportunities!</p>

        <form onSubmit={(e) => handleSubmit(e)} className="form" action="POST">
          <label>
            <> Email Me </>
            <FontAwesomeIcon icon={faEnvelope} />
          </label>

          <input
            className="email"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="name"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="subject"
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <textarea
            className="message"
            type="text"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <input className="submit" type="submit" value={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default Contacts;

