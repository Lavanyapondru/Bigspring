function Navbar() {
    return ( 

        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#"><img src='/logoimg.png'/></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav me-auto mb-md-0">
            <li className="nav-item"><a className="nav-link active me-3" aria-current="page" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link active me-3 " aria-current="page" href="blog">Blog</a></li>
            <li className="nav-item"><a className="nav-link active me-3 " aria-current="page" href="pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link active me-3 " aria-current="page" href="contact">Contact</a></li>
            <li className="nav-item"><a className="nav-link active me-3 " aria-current="page" href="faq">FAQ</a></li>
          </ul>
            <div>
            <button className="navbtnn fw-bold me-5" type="submit">Get Started</button>
               
            </div>
        
        </div>
      </div>
    </nav>
        </div>
     );
}

export default Navbar;