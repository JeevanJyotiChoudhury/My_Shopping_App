import React, { useState } from 'react'
import data from './Data.json'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { delItem } from '../Redux/Action/action'
import {addItem} from '../Redux/Action/action'

const ProductDetails = () => {
    const[cartBtn,setCartBtn]=useState("Add To Cart")
    const prodid = useParams()
    const prodDetails = data.filter((item)=>item.id == prodid.id)
    const product = prodDetails[0]
    console.log(product);
    const dispatch = useDispatch()
    const handleCart = (product) => {
      if(cartBtn==="Add To Cart"){
        dispatch(addItem(product))
        setCartBtn("Remove From Cart")
      }
      else{
        dispatch(delItem(product))
        setCartBtn("Add To Cart")
      }
    }
    
  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col-md-6 py-2  product">
                  <img src={product.image} alt={product.title} style={{height:"600px" ,width:"500px"}} />
              </div>
              <div className="col-md-6 py-5 d-flex flex-column justify-content-center">
                  <h2 className=" fw-bold">{product.title}</h2>
                  <hr />
                  <p className="lead">{product.description}</p>
                  <h4 className="text-center">₹ {product.price}</h4>
                  <p className="text-center">{product.rating.rate}⭐</p>
                  <button onClick={()=>handleCart(product)}className="btn btn-primary my-5">{cartBtn}</button>
              </div>
          </div>
      </div>
    </>
  )
}

export default ProductDetails