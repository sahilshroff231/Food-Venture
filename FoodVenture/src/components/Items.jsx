// import React, { useEffect, useState } from 'react'
// import Cartincredcre from './Cartincredcre';
// import './Items.css';
// import { useParams } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// function Items({ userId, id, dishname, image, price, description, amount }) {

  
//   const {rid,cid}=useParams();
//   const usenavigate=useNavigate();



//   const handleAddToCart = () => {
//     const storedData = JSON.parse(localStorage.getItem('userdata'));

//     if (!storedData || !storedData.id) {
//       usenavigate('/')
//       alert('Please login first');
//       return;
//     }
    
//     const newItem = { userId, id, dishname, image, price, description, amount };

//     fetch("http://localhost:3000/cart", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(newItem)
//     })
//       .then((res) => {
//         alert('Item added to cart');
//       })
//       .catch((err) => {
//         console.log(err.message)
//       });
//   };

//   return (
//     <>
     
//         <div className="card box" style={{ width: "18vw", height: "70vh" }} id={id} >
//           <img src={image} className="card-img-top p-4" style={{ width: "18rem", height: "15rem" }} alt="..." />
//           <div className="card-body ">
//             <div className='d-flex justify-content-between'>
//               <h5 className="card-title "> {dishname}</h5>
//               <span className="rating  ">4.2<i class="fa-solid fa-star" id='staricon'></i></span>

//             </div>
//             <div className=''>
//               <h5 className='text-end '>{price} </h5>
//               <p className="card-text">{description} </p>

//             </div>
//             <div className="d-flex flex-column">
//               <div className='d-flex justify-content-between'>

//               </div>
//               <a href={`/food/addtocart/${rid}/${cid}/${id}`}onClick={handleAddToCart} className="btn mt-3 bg-danger bg-gradient text-white" >Add to Cart</a>
//             </div>
//           </div>
//         </div>
      
//     </>
//   )
// }

// export default Items;


import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Items({  id, dishname, image, price, description, amount }) {
  const { rid, cid } = useParams();
  const navigate = useNavigate();
  const [storedData, setStoredData] = useState();

  const handleAddToCart = () => {
    const storedData = JSON.parse(localStorage.getItem('userdata'));
    setStoredData(storedData);
    console.log(storedData.id)
    

    if (!storedData || !storedData.id) {
      alert('Please login first');
      return;
    }

   
    const newItem = {
      userId: storedData.id, 
      id,
      dishname,
      image,
      price,
      description,
      amount
    };

    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItem)
    })
      .then((res) => {
        if (res.ok) {
          alert('Item added to cart');
        } else {
          throw new Error('Failed to add item to cart');
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert('Failed to add item to cart');
      });
  };

  return (
    <div className="card box" style={{ width: "18vw", height: "70vh" }} id={rid}>
      <img src={image} className="card-img-top p-4" style={{ width: "18rem", height: "15rem" }} alt="..." />
      <div className="card-body ">
        <div className='d-flex justify-content-between'>
          <h5 className="card-title "> {dishname}</h5>
          <span className="rating  ">4.2<i className="fa-solid fa-star" id='staricon'></i></span>
        </div>
        <div className=''>
          <h5 className='text-end '>{price} </h5>
          <p className="card-text">{description} </p>
        </div>
        <div className="d-flex flex-column">
          <div className='d-flex justify-content-between'>         
          </div>
          {/* Render the Add to Cart button with conditionally rendered href */}
          <a href={(storedData) ? `/food/addtocart/${rid}/${cid}/${id}` : '/'} className="btn mt-3 bg-danger bg-gradient text-white" onClick={handleAddToCart}>Add to Cart</a>
        </div>
      </div>
    </div>
  );
}

export default Items;
