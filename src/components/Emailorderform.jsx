import React from 'react';
import emailjs from 'emailjs-com';
import styles from '../styles/ContactUs.module.css';  // Import CSS module

const ContactUs = ({ cart = [] }) => {

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.init("Qi_4IT9iWjUlQoDan");

    const params = {
      sendername: document.querySelector("#sendername").value,
      to: document.querySelector("#to").value,
      Phone_number: document.querySelector("#Phone_number").value,
      Device_name: document.querySelector("#Device_name").value,
      subject: document.querySelector("#subject").value,
      cartItems: cart.map(item => `${item.name} - ₹${item.price}`).join('\n')
    };

    const service = "service_btcmw27";
    const template = "template_hyci4xv";

    emailjs.send(service, template, params)
      .then(res => {
        alert("Email sent successfully");
      })
      .catch(err => {
        console.error("Email sending failed:", err);
      });
  };

  return (
    <div className={styles.ContactUsContainer}>  {/* Use className from CSS module */}
      <form onSubmit={sendEmail} className={styles.ContactUsForm}>  {/* Use className from CSS module */}
        <h3>Order Us By Email</h3>
        <input type="text" id="sendername" placeholder="Your name" required />
        <input type="email" id="to" placeholder="Your email" required />
        <input type="number" id="Phone_number" placeholder="Your Phone Number" />
        <input type="text" id="Device_name" placeholder="Clothes For (Male/Female/Kids): " />
        <textarea id="subject" rows="4" placeholder="Types of Clothes (Jeans/Shirts/Kurta/Saree..)" /><br />
        {/* <textarea id="cartItems" rows="6" placeholder="Cart Items" value={cart.map(item => `${item.name} - ₹${item.price}`).join('\n')} readOnly /><br /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
