function Plan() {
    return ( 
        <div>
            <div className="container">
                <div className="row plan">
                    <h1 className="text-center mt-3 mb-5 display-4 p">Pricing</h1>
                    <div className="col-lg-4 col-md-6">
                        <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mt-3 mb-4">Basic Plan</h5>
                           <h1 className="display-3 lh-1">$49<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="text-secondary lh-1 mb-3">Best For Small Individuals</h4>
                           <ul>
                            <li>Express Service</li>
                            <li>Customs Clearance</li>
                            <li>Time-Critical Services</li>
                           </ul>
                        <button className="navbtn fw-bold" type="submit">Get Started For Free</button>
                           </div>
                           </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mt-3 mb-4">Professional Plan</h5>
                           <h1 className="display-3 lh-1 ">$49<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="text-secondary lh-1 mb-3">Best For Small Professionals</h4>
                           <ul>
                            <li>Express Service</li>
                            <li>Customs Clearance</li>
                            <li>Time-Critical Services</li>
                            <li>Cloud Service</li>
                            <li>Best Dashboards</li>
                           </ul>
                        <button className="navbtn fw-bold" type="submit">Get Started For Free</button>
                           </div>
                           </div>
                        
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="card pricing text-center">
                         <div className="card-body">
                           <h5 className="card-title mt-3 mb-4">Business Plan</h5>
                           <h1 className="display-3 lh-1">$49<span><small className="text-secondary fs-5">/month</small></span></h1>
                           <h4 className="lh-1 mb-3 text-secondary">Best For Large Individuals</h4>
                           <ul>
                            <li>Express Service</li>
                            <li>Customs Clearance</li>
                            <li>Time-Critical Services</li>
                           </ul>
                        <button className="navbtn fw-bold" type="submit">Get Started For Free</button>
                           </div>
                           </div>
                       
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Plan;