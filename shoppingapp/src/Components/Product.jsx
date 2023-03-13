import React from 'react'
import { Link } from 'react-router-dom'
import data from './Data.json'
import './product.css'

const Product = () => {


  const cartItem =(elem)=>{
    return(
      
       <div className="card my-5 py-2 mx-3 " key={elem.id} style={{width:"18rem"}} >
         <img src={elem.image} className="card-img-top" style={{height:"200px"}}alt={elem.title}/>
         <div className="card-body text-center ">
           <h5 className="card-title ">{elem.title}</h5>
           <p className="card-title ">{elem.category}</p>
           <p className="card-title ">{elem.rating.rate}⭐</p>
           <p className="card-title ">Available:{elem.rating.count}</p>
           <h3 className="card-title">₹ {elem.price}</h3>
           <Link className="btn btn-primary"to={`/products/${elem.id}`}>Buy Now</Link>

         </div>
       </div>
      
    )
  }
  return (
    <>
      <div className="container  py-2">
        <div className="row ">
          <div className="col-12 text-center">
            <h1>Products</h1>
            <hr />
          </div>
        </div>
      </div>
      
          <div className="container ">
          <div className="row  ">
            {data.map(cartItem)}
          </div>
          </div>
        
    </>
  )
}

export default Product