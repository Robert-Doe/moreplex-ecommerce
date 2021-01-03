import '../App.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min'
import './Person.css'
import {Link} from 'react-router-dom'


const product=(props)=> {

    const productTitle={
        fontSize:'16px',
        marginBottom:'5px'
    }
    const productPrice={
        fontSize:'7px',
        marginBottom: '1px'
    }
    const productBody={
        padding:'10px'
    }

    const {id,imageUrl,name,price}=props.productDetails;
    const addToCart=(e)=>{
        e.preventDefault();

        let cart =JSON.parse(localStorage.getItem('cart'));
        if(cart===null)
        {
            localStorage.setItem('cart',JSON.stringify([]))
            cart=[]
        }
        if(!cart.some((order)=>order.id===Number.parseInt(e.target.dataset.add)))
        {
            cart.push({id:Number.parseInt(e.target.dataset.add),quantity:0})
            localStorage.setItem('cart',JSON.stringify(cart));
            console.log(JSON.stringify(localStorage.getItem('cart')));
        }

        //const [cart,setCart]=useState(localStorage.getItem('cart'));

    }
    return (
        <section className='col-lg-2 col-md-3 col-sm-4 col-6 my-1'>
            <div className="card" >
                <img className="card-img-top" src={imageUrl} alt="Card image cap"/>
                <div className="card-body" style={productBody}>
                    <h5 className="product-title">{name}</h5>
                    <h6 className="product-price">&#162;{price.toFixed(2)}</h6>
                    <button onClick={addToCart} className="btn-cart" data-add={id}>Add to Cart</button>
                </div>
            </div>
        </section>
    );
}

export default product;
