import './App.css';
import React,{useState,useEffect} from "react";
import Order from './Order/Order';
import {listOfProducts} from './DataSet'

const Cart=()=> {
    const style={
        fontFamily:'Lato'
    }
    let [orders,setOrders]=useState([])

    useEffect(()=>{
        setOrders(JSON.parse(localStorage.getItem('cart')))
    },[])
    const getOrderById=(orderId)=>{
        return orders.find(n=>n.id===orderId);
    }

    const addQuantity=(e,id)=>{
        e.preventDefault();
       // console.log(JSON.parse(localStorage.getItem('cart')));
        console.log(orders);
       // let cartList=JSON.parse(localStorage.getItem('cart'));
        let cartPosition=orders.findIndex(obj=>obj.id===id)
        ///orders[cartPosition].quantity=Number.parseInt(e.target.value);
        setOrders(prevState=>{ prevState[cartPosition].quantity=Number.parseInt(e.target.value);
                    return prevState;
        })
        //localStorage.setItem('cart',JSON.stringify(cartList));
        //setOrders(prevState=>)
        //console.log(JSON.parse(localStorage.getItem('cart')));
        //setQuantity(getOrderById(id).quantity);
    }



    const removeItem=(id)=>{
        //e.preventDefault();
        //let cart =JSON.parse(localStorage.getItem('cart')).filter(n=>n.id!==id);
        //localStorage.setItem('cart',JSON.stringify(cart));
        setOrders((prevState)=>prevState.filter(n=>n.id!==id))
        console.log(orders);
    }

        //console.log(JSON.parse(localStorage.getItem('cart')))
       /* if(JSON.parse(localStorage.getItem('cart')).length>0){
               setOrders((prevState)=>prevState.map((order,key)=>{
                return(
                    <Order orderDetails={order} key={key} remove-order={removeItem} add-quantity={addQuantity}/>
                )
            }))
        }*/

    if(orders.length>0){
        setOrders((prevState)=>prevState.map((order,key)=>{
            return(
                <Order orderDetails={order}
                       key={key}
                       removeOrder={()=>removeItem(order.id)}
                       addQuantity={(e)=>addQuantity(e,order.id)}
                       orderById={getOrderById}/>
            )
        }))
    }


    return(
        <section style={style} className='mt-5 p-4 container'>
            <section className="row">
                {orders}
            </section>

        </section>
    )
}
export default Cart;