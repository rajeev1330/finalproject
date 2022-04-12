import React from 'react'
import { useEffect, useState} from "react";
import { Link, useParams } from 'react-router-dom';
import Items from '../data/Items';
import Categories from './Categories';

const ProductDetails = () => {
    const id = useParams();
   var id_generated = id;
  
   const data = Categories.find(item => item.id == id_generated.id);
   let [cart, setCart] = useState([])
    let localCart = localStorage.getItem("cart");
    console.log(data)
    const addItem = (item)  =>   {
      //create a copy of our cart state, avoid overwritting existing state
        let cartCopy = [...cart]; 
        
        //assuming we have an ID field in our item
        let {id} = item;
        
        //look for item in cart array
        let existingItem = cartCopy.find(cartItem => cartItem.id == id);
        
        
        //if item already exists
        if (existingItem) {
            existingItem.quantity += item.quantity //update item
        } else { //if item doesn't exist, simply add it
          cartCopy.push(item)
        }
        
        
        
        //update app state
        setCart(cartCopy)
        
        //make cart a string and store in local space
        let stringCart = JSON.stringify(cartCopy);
        localStorage.setItem("cart", stringCart)
    }
    //this is called on component mount
    useEffect(() => {
      //turn it into js
      localCart = JSON.parse(localCart);
      //load persisted cart into state if it exists
      if (localCart) setCart(localCart)
      
    }, []) //the empty array ensures useEffect only runs once
    return (
        <div>
        <div class="row">
            <div className="col-lg-4 col-md-6 col-sm-12 card_block" key={data.id}>
                <img src={data.image} />
                <h4>{data.title}</h4>
                <h6>Rs{data.price}</h6>
                <h6>{data.category}</h6>
                <div class="detail-box options">
                        <a href="/category" class="option1">Continue Shopping</a>
                        <button className="option2" onClick={() => addItem(data)}>Add to Cart</button>
                     </div>
            </div>
            < div class="col-sm-6" align="center"><br /><br />
            <h3>Description</h3>
            <h4>{data.title}</h4>
            </div>
        </div>
        </div>
    )
}

export default ProductDetails