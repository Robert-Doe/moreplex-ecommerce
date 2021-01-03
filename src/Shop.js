import './App.css';
import React,{useState} from "react";
import Product from './Product/Product';
import {listOfProducts} from './DataSet'

 const Shop=()=> {
     const style={
     fontFamily:'Lato'
 }

 return(
     <section style={style} className='mt-5 p-4 container'>
         <section className='row'>
             {listOfProducts.map((product,key)=>{
                 return(
                     <Product productDetails={product} key={key}/>
                 )
             })}
         </section>
     </section>
 )
}
export default Shop;


