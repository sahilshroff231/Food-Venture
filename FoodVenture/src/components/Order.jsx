// import React, { useEffect, useState } from 'react';

// import IMAGES from '../IMAGES/Img';
// import { Link } from 'react-router-dom';

// function Order() {
//     const [orderData, setOrderData] = useState([]);
//     const [address, setAddress] = useState(""); // Single address for all orders

//     useEffect(() => {
//         fetch("http://localhost:3000/order")
//             .then((res) => res.json())
//             .then((data) => {
//                 setOrderData(data);
//             })
//             .catch((error) => console.error("Error fetching order:", error));
//     }, []);

//     const handleChange = (event) => {
//         setAddress(event.target.value);
//     };

//     const joinAddress = () => {
//         // Send a PATCH request for each order to update the address
//         orderData.forEach(order => {
//             fetch(`http://localhost:3000/order/${order.id}`, {
//                 method: "PATCH",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ address: address })
//             })
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error("Failed to update Address");
//                 }
//             })
//             .then(data => {
//                 console.log(`Address updated successfully for order ${order.id}`);
//                 alert("order is placed successfully")
//             })
//             .catch(error => {
//                 console.error(`Error updating address for order ${order.id}:`, error);
//             });
//         });
//     };

//     return (
//         <>
//             <div className="d-flex justify-content-center">
//                 <div className="card mb-3 mt-lg-5" style={{ maxWidth: "500px" }}>
//                     <img src={IMAGES.payment} className="card-img-top" alt="..." />
//                     <div className="">
//                         <label className='mx-4'>Address</label><br />
//                         <input 
//                             type="text" 
//                             value={address} 
//                             onChange={handleChange} 
//                             className='m-4' 
//                             style={{ width: "90%" }} 
//                         />
//                     </div>
                    
//                   <a href="/food/order"  onClick={joinAddress}>Submit</a>
                   
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Order;


import React, { useEffect, useState } from 'react';
import IMAGES from '../IMAGES/Img';
import { Link, useParams } from 'react-router-dom';
import './order.css'

function Order() {
    const [orderData, setOrderData] = useState([]);
    const [address, setAddress] = useState("");
    const[orderid,setOrderid]=useState();
    const userId = localStorage.getItem('userId');
    const{rid,cid,id,cartid}=useParams();
    console.log(userId)


    useEffect(() => {
        fetch("http://localhost:3000/order")
            .then((res) => res.json())
            .then((data) => {
                setOrderData(data);
            })
            .catch((error) => console.error("Error fetching order:", error));
    }, []);

    const handleChange = (event) => {
        setAddress(event.target.value);
    };

    const joinAddress = () => {
        // Send a PATCH request for each order to update the address

        if (address.trim() === "") {
            alert("Please fill in the address.");
            return; // Exit the function if address is empty
        }
        orderData.forEach(order => {
            fetch(`http://localhost:3000/order/${order.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ address: address, userId: userId })
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                   
                    
                } else {
                    throw new Error("Failed to update Address");
                }
            })
            .then(data => {
                console.log(`Address updated successfully for order ${order.id}`);
                setOrderid(order.id)
                
            })
            .catch(error => {
                console.error(`Error updating address for order ${order.id}:`, error);
            });
        });
    };

    return (
        <>
        <div className="">
            <div className="d-flex justify-content-center ">
                <div className="card mb-3  paymentbox" style={{ maxWidth: "500px" }}>
                    <img src={IMAGES.payment} className="card-img-top" alt="..." />
                    <div className="">
                        <label className='mx-4 fs-5 fw-bold'>Address</label><br />
                        <input 
                            type="text" 
                            value={address} 
                            onChange={handleChange} 
                            className='m-4' 
                            style={{ width: "90%" }} 
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-center my-3">
                    <Link to={`/food/order/:${rid}/:${cid}/:${id}/:${cartid}/:${orderid}}`}>
                    <button onClick={joinAddress} className=' bg-danger bg-gradient border-0 rounded px-3 text-white '>Submit</button>
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default Order;
