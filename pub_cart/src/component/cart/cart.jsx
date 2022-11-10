import React from 'react';
import './cart.style.css';
export default class Cart extends React.Component{
    render(){
        return (
            <div className='main'>
                <div className='cart-details'>
                    <img src={this.props.cartDetails.image} alt={this.props.cartDetails.title} className="cart-img" />
                    <div class="cart-info">
                        <div className='cart-title'><h4>{this.props.cartDetails.title}</h4></div>
                        <div className='cart-description'>{this.props.cartDetails.description}</div>
                        <div className='cart-seller'>Seller: {this.props.cartDetails.seller}</div>
                        <p className='cart-price'>
                            ₹{this.props.cartDetails.price} - ₹{this.props.cartDetails.discount} discount  + ₹{this.props.cartDetails.packagingFees} Secured Packaging fee
                        </p>
                    </div>
                    <div className="cart-delivery">
                        <p className='delivery-date'>
                            Delivery by {this.props.cartDetails.date} | 
                            <span className='delivery-charge'> {this.props.cartDetails.deliveryCharges}</span>
                        </p>
                    </div>
                </div>
                <div className='cart-handling'>          
                    <button className='inc-btn'>+</button>
                    <input className="demoInput" type="number" defaultValue={1} />
                    <button className='dec-btn'>-</button>
                    <button className='cart-save-btn'>SAVE FOR LATER</button>
                    <button className='cart-remove-btn' onClick={()=>this.props.deletecart(this.props.cartDetails.id)}>REMOVE</button>
                </div>
            </div>
        );
    }
}