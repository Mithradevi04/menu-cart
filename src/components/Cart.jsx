import React, { useState, useEffect, useCallback } from 'react';
import '../styles/cart.css';
/*import { useNavigate } from 'react-router-dom';*/
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);
    /*const navigate = useNavigate();*/

    const handlePrice = useCallback(() => {
        let ans = 0;
        cart.forEach((item) => {
            ans += item.amount * item.price;
        });
        setPrice(ans);
    }, [cart]);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
    };
    
   

    useEffect(() => {
        handlePrice();
    }, [handlePrice]);
    



    /*const handleProceedToDelivery = () => {
        navigate('/billingaddress');
        console.log('Proceeding to delivery...');
    };*/

    

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>

                    <div>
                        <button onClick={() => handleChange(item, -1)}>-</button>
                        <button>{item.amount}</button>
                        <button onClick={() => handleChange(item, +1)}>+</button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span >Total Price</span>
                <span>Rs - {price}</span>
            </div>
            <br />
            {price > 0 && (
                <div className="text-center mt-3">
                    <Button variant="primary" style={{backgroundColor:"#ffc107",border:"#ffc107"}} /*onClick={handleProceedToDelivery}>*/>
                        Proceed to Delivery
                    </Button>

                </div>
            )}
        </article>
    );
};

export default Cart;