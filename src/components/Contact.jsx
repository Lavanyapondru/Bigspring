function Contact() {
  return (
    <div>
      <div className="container contactus py-5">
        <div className="row align-items-center g-lg-5 py-5">
            <h6 className="contact display-5 text-center">Contact Us</h6>
          <div className="col-md-10 mx-auto col-lg-7">
            <form className="p-4">
              <input type="text" className="form-control w-100 p-3 mb-3 rounded-2 bg-light border-none" placeholder="Enter your Name"></input>
              <input type="text" className="form-control w-100 p-3 mb-3 rounded-2 bg-light border-none" placeholder="Enter your email address"></input>
              <input type="text" className="form-control w-100 p-3 mb-3 rounded-2 bg-light border-none" placeholder="Subject"></input>
              <textarea className="form-control w-100 p-3 mb-3 rounded-2 bg-light border-none" rows="5" placeholder="Message"></textarea>



              
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
