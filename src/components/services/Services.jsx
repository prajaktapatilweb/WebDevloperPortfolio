import React from "react";
import "./services.scss";
import { motion } from "framer-motion";
import { Container } from "@mui/material";

export default function Services() {
  return (
    <motion.div className="services">
        
        <Container>
        <motion.div className="textcontainer">
        <p>
          We focus on helping your brand grow <br></br>
          and move forward
         
        </p>
        <hr></hr>
       
      </motion.div>
    
      <motion.div className="titlecontainer">
        <div className="title">
          <img src="/people.webp" alt=""></img>
          <h1>
            <b>Unique</b>Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <b>For Your</b>Business
          </h1>
          <button>What We Do?</button>
        </div>
      </motion.div>
      <motion.div className="listcontainer">
        <div className="Card">
          <h2>Branding</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button>Go</button>
        </div>
        <div className="Card">
          <h2>Branding</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button>Go</button>
        </div>
        <div className="Card">
          <h2>Branding</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button>Go</button>
        </div>
        <div className="Card">
          <h2>Branding</h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <button>Go</button>
        </div>
      </motion.div>
      </Container>
    </motion.div>
  );
}
