import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ContactBar from "./ContactBar";
import MessageAlert from "./MessageAlert";
import { sendThatMessage } from "../../utils/api";
require('dotenv').config();

export default function Contact() {

  const [formData, setFormData] = useState({
    from: "",
    message: ""
  });
  const [formError, setFormError] = useState(null);
  const [formSuccess, setFormSuccess] = useState(false);

  const changeHandler = event => {
    setFormData({
      ...formData,
    [event.target.name]:event.target.value,
    })
  }

  const submitHandler = event => {
    event.preventDefault();
    const controller = new AbortController();
    sendThatMessage(formData, controller.signal)
    .then(response => setFormSuccess(current => !current))
    .then(() => setFormData({from: "",
    message: ""}))
    .catch(setFormError);
    return ()=> controller.abort();
  }

  return (
    <div className="component-container">
      <Navbar />
      <h2>
        Contact me through one of the following choices or send me a message
        here:
      </h2>
      <ContactBar />
      {formSuccess ? <MessageAlert alert={"Your message has been sent. Thank You!"}/> : formError ? <MessageAlert alert={formError} /> : null}
      <form className="" onSubmit={submitHandler}>
          <input
            name="from"
            type="text"
            value={formData.from}
            placeholder="From"
            onChange={changeHandler}
            className=""
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={changeHandler}
            className=""
          />
          <button type="submit">Send</button>
      </form>
    </div>
  );
}
