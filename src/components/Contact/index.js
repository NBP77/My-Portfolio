import React from "react";
import "./style.css";
import emailjs from "emailjs-com";

function ContactPage() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s1o0xa7",
        "template_h0zdksg",
        e.target,
        "user_xjR1fWF9X75shjAcDRBl1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <div className="container is-fullhd">
        <div className="contact-me">
          <h1>
            <span className="c">C</span>
            <span className="o">o</span>
            <span className="n">n</span>
            <span className="t">t</span>
            <span className="a">a</span>
            <span className="c">c</span>
            <span className="t">t </span>
            <span className="m">M</span>
            <span className="e">e</span>
          </h1>
        </div>
        <section className="section">
          <div className="columns parent-column is-justify-content-center">
            <form onSubmit={sendEmail} className="column is-6 input-form">
              <div className="title is-4 email-intro">
                This form sends an email to my work email!
              </div>
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Write name...."
                  name="name"
                />
              </div>
              <label className="label">Email</label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  placeholder="Write valid email...."
                  name="email"
                />
              </div>
              <label className="label">Subject</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Write the subject of the email...."
                  name="subject"
                />
              </div>
              <label className="label">Write your message</label>
              <textarea
                className="textarea"
                placeholder="Write message...."
                rows="10"
                name="message"
              ></textarea>
              <button className="button is-rounded">Send Email</button>
            </form>
            <div className="column is-6 contact-container">
              <div className="title is-4 contact-title">Methods of contact</div>

              <div class="list">
                <li class="list-item">Email: nbp77@outlook.com</li>
                <li class="list-item">Cell: (860)248-1586</li>
                <a
                  class="list-item"
                  href="https://www.linkedin.com/in/nick-pendergast-273014123/"
                  target="_blank"
                >
                  LinkedIn
                </a>
                <a
                  class="list-item"
                  href="https://github.com/nbp77"
                  target="_blank"
                >
                  GitHub
                </a>
                <a
                  class="list-item"
                  href="https://drive.google.com/file/d/1TbbbikAfa_3LiyYf0L4CiaArl3NRb7zz/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactPage;
