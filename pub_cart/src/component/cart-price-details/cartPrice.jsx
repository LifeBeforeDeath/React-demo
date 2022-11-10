import React from "react";
import './cartPrice.style.css';
// import cartList from "../../data/cart-list";
export default class PriceBox extends React.Component{
    // state = {carts:cartList}
    

    allItemTotalPrice(){
        let sum = 0;
        for(let i=0;i<this.props.carts.length;i++){
            sum += this.props.carts[i].price; 
        }
        return sum;
    }

    allItemTotalDiscount(){
        let sum = 0;
        for(let i=0;i<this.props.carts.length;i++){
            sum += this.props.carts[i].discount; 
        }
        return sum;
    }

    allItemTotalPackagingFee(){
        let sum = 0;
        for(let i=0;i<this.props.carts.length;i++){
            sum += this.props.carts[i].packagingFees; 
        }
        return sum;
    }

    totalAmount(){
        let total = this.allItemTotalPrice() + this.allItemTotalPackagingFee() - this.allItemTotalDiscount();
        return total;
    }

    render(){
        return (
            <div className="price-details">
                <h4 className="heading">PRICE DETAILS</h4>
                <hr></hr>
                <table>
                    <tbody className="body">
                        <tr>
                            <td>Price({this.props.carts.length} items)</td>
                            <td>₹{this.allItemTotalPrice()}</td>
                        </tr>
                        <tr>
                            <td>Discount</td>
                            <td>-₹{this.allItemTotalDiscount()}</td>
                        </tr>
                        <tr>
                            <td>Delivery Charges</td>
                            <td><span className="delivery-charges">{this.props.carts[0].deliveryCharges}</span></td>
                        </tr>
                        <tr>
                            <td>Secured Packaging Fee</td>
                            <td>₹{this.allItemTotalPackagingFee()}</td>
                        </tr>
                        <tr className="total-amount">
                            <td><strong>Total Amount</strong></td>
                            <td>₹{this.totalAmount()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}