import React, { useEffect, useState } from 'react';

import './Items.css';
import { useNavigate } from 'react-router-dom';
import VegItems from './Vegitems';

function VegProduct() {
    const [Vegproductdata, setVegProductdata] = useState([]);


    useEffect(() => {
        const storedUserData = JSON.parse(localStorage.getItem('userdata'));
        const userId = storedUserData ? storedUserData.id : null;
        

        fetch('http://localhost:3000/vegproduct')
            .then(res => res.json())
            .then(resp => {
                // Add userId to each product object
                const productsWithUserId = resp.map(product => ({
                    ...product,
                    userId: userId
                }));
                setVegProductdata(productsWithUserId);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className='d-flex justify-content-center'>
            <div className='main'>
                <div className='container'>
                    <div className='row'>
                        {Vegproductdata && Vegproductdata.map(curItems => (
                            <div key={curItems.id} className='col-md-3 mb-3'>
                                <VegItems {...curItems} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VegProduct;
