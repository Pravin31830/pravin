import styles from './Contactstyle.module.css';
import { useState } from 'react';



function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Error sending message');
    }
  };
  

  return (
    <section id="contact" className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name' hidden>Name</label>
          <input type='text' name='name' id='name' placeholder='Name' value={formData.name} onChange={handleChange} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>Email</label>
          <input type='email' name='email' id='email' placeholder='Email' value={formData.email} onChange={handleChange} required />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>Message</label>
          <textarea name='message' id='message' placeholder='Message' value={formData.message} onChange={handleChange} required />
        </div>
        <input type='submit' className='hover btn' value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
