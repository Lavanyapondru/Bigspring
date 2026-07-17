function Latest() {

    return ( 
        <div>
            <div className="container">
                <div className="latest">
                <h1 className="display-5">Latest News</h1>
                </div>
                <div className="row blogs">
                    <div className="col-lg-6">
                        <img src="/blog-1.jpg" className="blog1 w-100"/>
                    </div>
                    <div className="col-lg-6 blog1text">
                        <h2><a href="" className="text-decoration-none text-dark">Adversus is a web-based dialer and practical CRM solution</a></h2>
                        <p className="text-secondary mt-4">##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He</p>
                        <button className="navbtn fw-bold me-5" type="submit">Read More</button>
                    </div>
                </div>
                <div className="row blogs1">
                    <div className="col-lg-4">
                        <img src="/blog-1.jpg"className="w-100 blog1"/>
                        <h3 className="mt-2"><a href="" className="text-decoration-none text-dark">How to make toys from old Olarpaper</a></h3>
                        <button className="navbtn fw-bold mb-3" type="submit">Read More</button>
                    </div>
                    <div className="col-lg-4">
                        <img src="/blog-2.jpg"className="w-100 blog1"/>
                        <h3 className="mt-2"><a href="" className="text-decoration-none text-dark">What you need to know about photography</a></h3>
                        <button className="navbtn fw-bold me-5 mb-3" type="submit">Read More</button>
                    </div>
                    <div className="col-lg-4">
                        <img src="/blog-3.jpg"className="w-100 blog1"/>
                        <h3 className="mt-2"><a href="" className="text-decoration-none text-dark">How to make toys from old Olarpaper</a></h3>
                        <button className="navbtn fw-bold me-5 mb-3" type="submit">Read More</button>
                    </div>
                </div>
                </div>


                <div className="container">
                <div className="row blogs">
                    <div className="col-lg-6">
                        <img src="/blog-4.jpg" className="blog1 w-100"/>
                    </div>
                    <div className="col-lg-6 blog1text">
                        <h2><a href="" className="text-decoration-none text-dark">What you need to know about photography</a></h2>
                        <p className="text-secondary mt-4">##### Heading exampleHere is an example of headings. You can use this heading by the following markdown rules. For example: use # for heading 1 and use ###### for heading 6.# Heading 1## He</p>
                        <button className="navbtn fw-bold me-5 mb-3" type="submit">Read More</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Latest;