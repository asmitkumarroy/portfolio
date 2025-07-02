import React from 'react';
import ResumePDF from '../assets/your-resume.pdf'; // Add your resume to the assets folder

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 2rem' }}>
      <h2>Contact Me</h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <a href={ResumePDF} download="YourName-Resume.pdf" className="resume-button">
        Download Resume
      </a>
    </section>
  );
};

export default Contact;