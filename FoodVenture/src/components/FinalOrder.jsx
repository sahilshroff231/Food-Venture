// import React, { useEffect, useState } from 'react';

// function FinalOrder() {
//     const [orderItems, setOrderItems] = useState([]);

//     useEffect(() => {
//         fetch("http://localhost:3000/order")
//             .then((res) => res.json())
//             .then((resp) => {
//                 setOrderItems(resp);
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }, []);

//     return (
//         <div className="container">
//             <div className="row justify-content-center">
//                 <div className="col-md-4 d-flex align-items-center flex-column">
//                     {orderItems.map((item) => (
//                         <div className="mb-3" key={item.id}>
//                             <div className="card">
//                                 <img src={item.image} className="card-img-top" alt="..." />
//                                 <div className="card-body">
//                                     <h5 className="card-title">{item.dishname}</h5>
//                                     <p className="card-text">Price: {item.price}</p>
//                                     <p className="card-text">Amount: {item.amount}</p>
//                                     <p className="card-text">Address: {item.address}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default FinalOrder;

import React, { useEffect, useState } from 'react';
import './finalorder.css'
function FinalOrder() {
    const [orderItems, setOrderItems] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetch("http://localhost:3000/order")
            .then((res) => res.json())
            .then((resp) => {
                // Filter order items based on userId
                const filteredItems = resp.filter(item => item.userId === userId);
                setOrderItems(filteredItems);
                console.log(resp)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [userId]);

    return (
        <div className="container">
             <h1 className='text-center m-5 text-decoration-underline'>Order List</h1>
            <div className="row justify-content-center">
                <div className="col-md-4 d-flex align-items-center flex-column">
                {orderItems.length === 0 ? (
                        <p>No orders found for this user.</p>
                    ) : (
                        orderItems.map((item) => (
                            <div className="mb-3" key={item.id}>
                                <div className="card finalorderbox">
                                    <img src={item.image} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Order-Id: {item.id}</h5>
                                        <h5 className="card-title">{item.dishname}</h5>
                                        <p className="card-text">Price: {item.price}</p>
                                        <p className="card-text">Amount: {item.amount}</p>
                                        <p className="card-text">Address: {item.address}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default FinalOrder;
