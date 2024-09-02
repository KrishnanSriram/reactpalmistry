import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.from_name) formErrors.fullName = "Full name is required";
    if (!formData.email) formErrors.email = "Email is required";
    if (!formData.message) formErrors.message = "Message is required";

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();

    if (Object.keys(formErrors).length === 0) {

      var templateParams = {
        to_name: 'Palmist',
        from_name: formData.from_name + ', ' + formData.email,
        message: formData.message
      };

      emailjs.init({
        publicKey: 'TGfbOqBZ4mzbVj82o',
        // Do not allow headless browsers
        blockHeadless: true,
      });
      
      emailjs.send('service_kqdi0ob', 'template_svbsr5n', templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Form submitted successfully!');
          // Handle form submission, e.g., send the data to a server
          setFormData({
            from_name: '',
            email: '',
            phone: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error);
          setErrors(error);
        },
      );     
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div id="contact" className="container col-8 my-5 ">
      <h2 className='font-cursive-text'>Contact Me</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            id="from_name"
            name="from_name"
            value={formData.from_name}
            onChange={handleChange}
          />
          {errors.from_name && <div className="invalid-feedback">{errors.from_name}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number (Optional)</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
