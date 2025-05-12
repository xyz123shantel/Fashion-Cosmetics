import React, { useState } from 'react';
const ContactUs = () => {
const [form, setForm] = useState({ name: '', email: '', message: '' });
const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
e.preventDefault();
setSubmitted(true);
setForm({ name: '', email: '', message: '' });
};

return (
<>
<div className="container py-5" style={{ fontFamily: 'Times New Roman, serif' }}>
<h2 className="mb-4 text-center mt-4">Contact Our Beauty Shop</h2>

<div className="row">
<div className="col-md-6">
<h5>Visit Us</h5>
<p><strong>Address:</strong> We are located at Uthiru Dumbonne estate place near main stage</p>
<p><strong>Phone:</strong> +254 741966948</p>
<p><strong>Email:</strong> elorafashaion&beautyshop@gmail.com</p>
<p><strong>Opening Hours:</strong><br />
Monday – Friday: 9:00 AM – 6:00 PM<br />
Saturday: 10:00 AM – 4:00 PM<br />
Sunday: Closed
</p>

 

</div>

<div className="col-md-6">
<h5>Send Us a Message</h5>
{submitted && <div className="alert alert-success">Thanks for reaching out! We’ll get back to you shortly.</div>}

<form onSubmit={handleSubmit}>
<input
type="text"
name="name"
value={form.name}
onChange={handleChange}
className="form-control mb-3"
placeholder="Your Name"
required
/>
<input
type="email"
name="email"
value={form.email}
onChange={handleChange}
className="form-control mb-3"
placeholder="Your Email"
required
/>
<textarea
name="message"
value={form.message}
onChange={handleChange}
className="form-control mb-3"
rows="5"
placeholder="Your Message"
required
></textarea>
<button type="submit" className="btn btn-primary">Send Message</button>
</form>
</div>
</div>
</div>
 

</>
);
};

export default ContactUs;