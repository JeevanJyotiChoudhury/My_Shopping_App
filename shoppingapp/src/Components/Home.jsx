import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <>
    <div>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStgIB9J4Vijz-QYQluGoHKHs9eH6ouf_ocNQ&usqp=CAU" class="d-block w-100" alt="IPHONE" height="600px"/>
    </div>
    <div class="carousel-item ">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo-O50WpgSAiwCKzM0rggWOm0PMO5rKjaQMQ&usqp=CAU" class="d-block w-100" alt="IPHONE" height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSH8ZQqjtDQuUw_hdh-Q0PiM-v0R-P6Rb8Ag&usqp=CAU" class="d-block w-100" alt="IPHONE" height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwt8N6XyVc84s3QCN2W24YPLpa3_vLQgmVQ&usqp=CAU" class="d-block w-100" alt="IPHONE" height="600px"/>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjXmNGiKIWwtwzPAXF7Cm9IVTj32btycEA7w&usqp=CAU" class="d-block w-100" alt="IPHONE" height="600px"/>
    </div>
    
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <Product/>
    </>
  )
}

export default Home