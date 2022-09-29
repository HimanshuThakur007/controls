import React, { useState } from "react";
import Modal from "./Modal";
import "./Model.css";
import styles from "./App.module.css";

const Model = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    textarea: "",
  });

  const { firstname, lastname, email, contact, textarea } = inputValue;

  const handleInputField = (e) => {
    const { name, value } = e.target;
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const modalHandler = (e) => {
    e.preventDefault();
    setIsOpen(true);

    
  };

  const saveHandler =(e)=>{
    const data = inputValue;
    setInputValue((prevState) => ({
        ...prevState,
        firstname: " ",
        lastname: " ",
        email: " ",
        contact: " ",
        textarea: " ",
      }));
      console.log(data);
  }

  return (
    <div>
      <div className="container">
        <div className="main mt-lg-0 mt-5">
          <form className="model_form">
            <div className="Heading">
              <h5 className="header">Model Form</h5>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label>First Name :</label>
                <input
                value={firstname}
                onChange ={handleInputField}
                name="firstname"
                  type="text"
                  className="inputField"
                  placeholder="Name..."
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label>Last Name :</label>
                <input
                value={lastname}
                onChange ={handleInputField}
                name="lastname"
                  type="text"
                  className="inputField"
                  placeholder="Last Name..."
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label>Email :</label>
                <input
                value={email}
                onChange ={handleInputField}
                name="email"
                  type="email"
                  className="inputField"
                  placeholder="abc@gmail.com.."
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <label>Contact :</label>
                <input
                value={contact}
                onChange ={handleInputField}
                name="contact"
                  type="contact"
                  className="inputField"
                  placeholder="+913456789.."
                />
              </div>
              <div className="desc col-lg-12 col-md-12 col-sm-12">
                <label>Description :</label>
                <textarea
                value={textarea}
                onChange ={handleInputField}
                name="textarea"
                  type="text"
                  className="textarea"
                  placeholder="message.....!"
                />
              </div>
              <div className="btnSubmit col-lg-12 col-md-12 col-sm-12">
                {/* <Button className ="submit_button" title = "Submit"/> */}
                {/* <main> */}
                <button className={styles.primaryBtn} onClick={modalHandler}>
                  Submit
                </button>
                {isOpen && <Modal setIsOpen={setIsOpen} saveHandler={saveHandler} />}
                {/* </main> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
