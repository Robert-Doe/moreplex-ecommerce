import '../App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min'
import './Order.css'
import {listOfProducts} from "../DataSet";


const Order=(props)=> {

   /* const productTitle={
        fontSize:'16px',
        marginBottom:'5px'
    }
    const productPrice={
        fontSize:'7px',
        marginBottom: '1px'
    }
    const productBody={
        padding:'10px'
    }*/
    const {id,quantity}=props.orderDetails;
    //console.log(props.orderDetails);

    //let [quantity,setQuantity]=useState(getOrderById(id).quantity);

    const getObject=(id)=>{
        return listOfProducts.find(n=>n.id===id)
    }



    return (
        <section className='offset-lg-3 col-lg-6 offset-md-2 col-md-8'>
            <div className="card mb-3"  style={{maxHeight:'170px'} }>
                <div className="row g-0">
                    <div className="col-4 justify-content-center" >
                        <img src={getObject(id).imageUrl}  className='card-img' style={{maxHeight:'170px',width:'auto'}} alt="..."/>
                    </div>
                    <div className="col-8">
                        <div className="card-body" style={{position:'relative'}}>
                            <button className='btn-remove' style={{position:'absolute',top:'5px',right:'5px'}} onClick={props.removeOrder}>x</button>
                            <h5 className="">{getObject(id).name}</h5>
                            <div className="form-outline">
                                <input type="number" id="typeNumber" min='1' placeholder='Quantity' className="form-control" onChange={props.addQuantity} value={quantity}/>
                                <h6>Extimate: {quantity}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;
