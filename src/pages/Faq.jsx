import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Faq() {
    return ( 
        <div>
            <Navbar/>
            <div className="container">
                <div className="faqs">
                    <h3 className="display-5 text-center mt-4 mb-5">Frequently Asked Questions</h3>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-8 col-md-8 col-sm-12">
                            <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div className="question">
        <h5><i class="bi bi-check-circle-fill me-3 iconfa"></i>Discounts for Non Profit Organizations?</h5>
        </div>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <div className="question">
        <h5><i class="bi bi-check-circle-fill me-3 iconfa"></i>I need something, Can you make it?</h5>
        </div>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="question">
        <h5><i class="bi bi-check-circle-fill me-3 iconfa"></i>Is there any documentation and support?</h5>
        </div>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div className="question">
        <h5><i class="bi bi-check-circle-fill me-3 iconfa"></i>Any refunds?</h5>
        </div>
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
      </div>
    </div>
  </div><div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <div className="question">
        <h5><i class="bi bi-check-circle-fill me-3 iconfa"></i>What is a product key?</h5>
        </div>
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
      </div>
    </div>
  </div>
</div>
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-6 cpl-md-6 faq mt-3 mb-3">
                            <div className="questions">
                                <h4 className="mb-3"><i class="bi bi-check-circle-fill me-3 iconfa"></i>Will updates also be free?</h4>
                                <p className="lh-4">Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
                            </div>                           
                        </div>

                        <div className="col-lg-6 col-md-6 faq mt-3 mb-3">
                            <div className="questions">
                               <h4><i class="bi bi-check-circle-fill me-3 iconfa"></i>Discounts for Non Profit Organizations?</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
                            </div>                           
                        </div>

                        <div className="col-lg-6 col-md-6 faq mt-3 mb-3">
                            <div className="questions">
                            <h4><i class="bi bi-check-circle-fill me-3 iconfa"></i></h4>
                            <p>Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
                            </div>                           
                        </div>

                        <div className="col-lg-6 col-md-6 faq mt-3 mb-3">
                            <div className="questions">
                            <h4><i class="bi bi-check-circle-fill me-3 iconfa"></i></h4>
                            <p>Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 faq mt-3 mb-3">
                         <div className="questions">
                            <h4><i class="bi bi-check-circle-fill me-3 iconfa"></i></h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus link ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
                         </div>
                        </div>

                        <div className="col-lg-6 col-md-6 faq mt-3 mb-3">
                            <div className="questions">
                              <h4><i class="bi bi-check-circle-fill me-3 iconfa"></i></h4>
                              <p>Lorem, link ipsum dolor sit amet consectetur adipisicing elit. Cumque praesentium nisi officiis maiores quia sapiente totam omnis vel sequi corporis ipsa incidunt reprehenderit recusandae maxime perspiciatis iste placeat architecto, mollitia delectus ut ab quibusdam. Magnam cumque numquam tempore reprehenderit illo, unde cum omnis vel sed temporibus, repudiandae impedit nam ad enim porro, qui labore fugiat quod suscipit fuga necessitatibus. Perferendis, ipsum? Cum, reprehenderit. Sapiente atque quam vitae, magnam dolore consequatur temporibus harum odit ab id quo qui aspernatur aliquid officiis sit error asperiores eveniet quibusdam, accusantium enim recusandae quas ea est! Quaerat omnis, placeat vitae laboriosam doloremque recusandae mollitia minima!</p>
                            </div>                           
                        </div>

                    </div> */}
                </div>
            </div>
            <Footer/>
        </div>
     );
}

export default Faq;

