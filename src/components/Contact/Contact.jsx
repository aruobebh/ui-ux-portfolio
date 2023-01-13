import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className='app__contact section__padding' id='contact'>
      <div className="app__contact-container">
        <div>
          <h3>Get In Touch</h3>
          <p>
          I’m very approachable and would love to speak to you. Feel free to call, send me an email . Follow me in social media or simply complete the enquiry form.
          </p>
        </div>

        <div>
          <h3>Send Me A Message</h3>
          <form action="">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" className='border' />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" className='border' />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea name=""></textarea>
            </div>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact