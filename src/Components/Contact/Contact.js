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
    setFormError(null);
    setFormSuccess(null);
    const controller = new AbortController();
    const fromTest = /\S/.test(formData.from);
    const messageTest = /\S/.test(formData.message)
    if(fromTest && messageTest){
    sendThatMessage(formData, controller.signal)
    .then(response => setFormSuccess(current => !current))
    .then(() => setFormData({from: "",
    message: ""}))
    .catch(setFormError);}
    else {
      if(fromTest) {
        setFormError("The message body must contain more than white space. Thank You!")
      }
      else {
        setFormError('The "From" line must contain more than white space. Thank You!')
      }
    }
    return ()=> controller.abort();
  }

  return (
    <div className="component-container">
      <Navbar />
      <form className="contact-form" onSubmit={submitHandler}>
      <div className="large-context lc">
      <ContactBar />
      </div>
      {formSuccess ? <MessageAlert alert={"Your message has been sent. Thank You!"}/> : formError ? <MessageAlert alert={formError} /> : null}
          <input
            name="from"
            type="text"
            value={formData.from}
            placeholder="From"
            onChange={changeHandler}
            className="contact-form-element from"
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={changeHandler}
            className="contact-form-element message"
          />
          <button type="submit" className="contact-send submit">Send</button>
      </form>
    </div>
  );
}
