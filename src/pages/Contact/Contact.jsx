import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    emailjs.init('xXRIuRbwkfAlURR6R'); // Replace with your EmailJS public key
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n6jneod', 'template_gskvzyr', e.target)
      .then((result) => {
        console.log('SUCCESS!', result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send the message, please try again later.');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221641.89539621484!2d-97.9383829!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sus!4v1735000000000!5m2!1sen!2sus"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form id="contact_form" onSubmit={sendEmail}>
          <div className="input-wrapper">
            <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />
            <input type="email" name="reply_to" className="form-input" placeholder="Email address" required data-form-input />
          </div>
          <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </section>
  );
};

export default Contact;
