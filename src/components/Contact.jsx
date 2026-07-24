import { useState } from "react";
import Swal from "sweetalert2";

function Contact() {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject:"",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    // Message
     if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

if (!validate()) return;

  const data = {
    access_key: "7f417e55-d2d0-4a46-86bc-dbb53475324e", // Replace with your Web3Forms Access Key
    subject: "New Contact Form Submission",
    name: formData.name,
    email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify(data),   // ✅ must stringify
});

  const result = await response.json();

  if (result.success) {
    // alert("Message sent successfully!");
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for contacting me. I'll get back to you soon.",
      confirmButtonColor: "#0d6efd",
    });

    // Clear the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear validation errors
    setErrors({});
  } else {
    // alert("Something went wrong!");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong. Please try again!",
      confirmButtonColor: "#dc3545",
    });
    console.log(result);
  }
};
  return (
    <div>
      <div className="container contactus py-5">
        <div className="row align-items-center g-lg-5 py-5">
            <h6 className="contact display-5 text-center">Contact Us</h6>
          <div className="col-md-10 mx-auto col-lg-7">
            <form className="p-4" onSubmit={handleSubmit}>
              <input type="text" id="name" className="form-control w-100 p-3 mb-2 rounded-2 bg-light border-none" placeholder="Enter your Name"  value={formData.name} onChange={handleChange}/>
              {errors.name && <small className="text-danger">{errors.name}</small>}

              <input type="text" className="form-control w-100 p-3 mb-2 rounded-2 bg-light border-none" placeholder="Enter your email address" id="email"  value={formData.email} onChange={handleChange}/>
              {errors.email && <small className="text-danger">{errors.email}</small>}

              <input type="text" className="form-control w-100 p-3 mb-2 rounded-2 bg-light border-none" placeholder="Subject" id="subject" value={formData.subject} onChange={handleChange}/>
              {errors.subject && <small className="text-danger">{errors.subject}</small>}

              <textarea className="form-control w-100 p-3 mb-2 rounded-2 bg-light border-none" rows="5" placeholder="Message" id="message" value={formData.message} onChange={handleChange}></textarea>
              {errors.message && <small className="text-danger">{errors.message}</small>}
              
               <button className="navbtn fw-bold" type="submit">Send Now</button>
            </form>
          </div>

          <div className="col-lg-5 text-lg-start">
            <h4 className="lh-1 text-body-emphasis mb-3 text-center">
             Why you should contact us!
            </h4>
            <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit recusandae voluptates doloremque veniam temporibus porro culpa ipsa, nisi soluta minima saepe laboriosam debitis nesciunt.</p>
            <div className="contactlist">
                <p className="lh-1">phone:<a href="totel:+88 125 256 452" className="text-decoration-none text-dark fw-bold">+88 125 256 452</a></p>
                <p className="lh-1">Mail:<a href="mailto:info@bigspring.com" className="text-decoration-none text-dark fw-bold">info@bigspring.com</a></p>
                <p className="lh-1">Address: 360 Main rd, Rio, Brazil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
