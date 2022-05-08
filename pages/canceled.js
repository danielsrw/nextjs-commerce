import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
    }, []);

    return (
        <div className="cancel-wrapper">
            <div className="cancel">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>You canceled your order</h2>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Back to Shopping
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success