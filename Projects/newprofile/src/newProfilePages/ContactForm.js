import React from 'react';
import emailjs from 'emailjs-com';
import { useAlert } from "react-alert";

export default function ContactUs() {
  const alert=useAlert()
    function sendEmail(e){
        // e.preventDefault();

        //  emailjs.sendForm('gmail', 'Testing', e.target, 'user_HNJQYRfuuvOlzm6OR6IKn')
        //  .then((result) => {
        //      console.log(result.text);
        //  }, (error) => {
        //      console.log(error.text);
        //  });
         console.log("Are you here?")
         alert.show("Your message has been sent! check the email you have provided")
        e.target.reset()
}
  return (
    <div className="ContactForm">
        <form onSubmit={sendEmail}>
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email"/>
            <input type="text" placeholder="Business/Company" name="business"/>
            <textarea type="text" placeholder="Message" name="message"></textarea>
            <input type="submit" value="Send" onClick={() => {
            alert.show('Oh look, an alert!')
    }}/>
        </form>
    </div>
  );
}
