import React, { Fragment } from "react";
import "../css/contact.css";
const ContactComponents = () => {
  return (
    <Fragment>
      <section id="fourth">
        <div class="title">
          <h1>Contact Us</h1>
        </div>
        <div className="coulums">
          <section class="Contact">
            <h1>Get In Touch</h1>
            <input type="text" placeholder="Write Full Name" />
            <input type="email" placeholder="Write your Email" />
            <input type="text" placeholder="Write your Mobile" />
            <input type="text" placeholder="Write your Massage" />
            <button>Send Massage</button>
          </section>
          <section className="talk">
            <h1>Talk To Us</h1>
            <div className="single">
              <span>
                <img src="" alt="" />
              </span>
              <h2>EMAIL</h2>
              <p>something@gmail.com</p>
            </div>
            <div className="single">
              <span>
                <img src="" alt="" />
              </span>
              <h2>PHONE NUMBER</h2>
              <p>+2 01211955776</p>
            </div>
            <div className="single">
              <span>
                <img src="" alt="" />
              </span>
              <h2>ADDRESS</h2>
              <p>Cairo,Egypt</p>
            </div>
          </section>
        </div>
      </section>
    </Fragment>
  );
};

export default ContactComponents;