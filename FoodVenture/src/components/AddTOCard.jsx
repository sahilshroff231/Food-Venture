

// import React, { useEffect, useState } from 'react';
// import Cartincredcre from './Cartincredcre';
// import './addtocart.css';
// import { Link, useParams } from 'react-router-dom';

// function AddToCard() {
//   const [cartItems, setCartItems] = useState([]);
//   const [totalQuantity, setTotalQuantity] = useState(0);
//   const [selectedItems, setSelectedItems] = useState({});
// //   const {rid,cid,id}=useParams()
//   const [cartid,setCartid] =useState();

  

//   useEffect(() => {
//     const storedUserData = JSON.parse(localStorage.getItem('userdata'));
//     const userId = storedUserData ? storedUserData.id : null;
//     fetch("http://localhost:3000/cart").then(res => {
//       return res.json();
//     }).then(resp => {
//       const userCartItems = resp.filter(item => item.userId === userId);
//       setCartItems(userCartItems)
//       const totalQty = userCartItems.length > 0 ? userCartItems.reduce((total, item) => total + item.amount, 0) : 0;
//       setTotalQuantity(totalQty);
//     })
//   }, [cartItems]);


//   const removeItem = (itemId) => {


//     // Send a DELETE request to the server to remove the item
//     fetch(`http://localhost:3000/cart/${itemId}`, {
//       method: 'DELETE', // Corrected DELETE method usage
//     })
//       .then(res => {
//         if (!res.ok) {
//           throw new Error('Failed to delete item');
//         }

//         const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        
//         setCartitemValue(updatedCartItems.id)
//         const totalQty = updatedCartItems.reduce((total, item) => total + item.amount, 0);
//         setTotalQuantity(totalQty);
//       })
//       .catch(err => {
//         console.error('Error deleting item:', err);
//         alert('Failed to delete item. Please try again later.');
//       });
//   };
  


  // const handleAddToCart = () => {
  //   const checkedItems = cartItems.filter(item => selectedItems[item.id]);

  //   if (checkedItems.length > 0) {
  //     // Array to store promises for each item order request
  //     const orderRequests = checkedItems.map(item =>
  //       fetch("http://localhost:3000/order", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(item) // Send each item individually
  //       })
  //     );

  //     // Execute all order requests simultaneously
  //     Promise.all(orderRequests)
  //       .then(responses => {
  //         // Check if all order requests are successful
  //         const allRequestsSuccessful = responses.every(response => response.ok);
  //         if (allRequestsSuccessful) {
  //           // If all orders are successful, delete the selected items from the cart
  //           const deleteRequests = checkedItems.map(item =>
  //             fetch(`http://localhost:3000/cart/${item.id}`, {
  //               method: "DELETE"
  //             })
  //           );

  //           // Execute all delete requests simultaneously
  //           Promise.all(deleteRequests)
  //             .then(() => {
  //               // Clear the local state of cartItems and selectedItems
  //               setCartItems([]);
  //               setSelectedItems({});
  //               setTotalQuantity(0);
             
           

  //               // alert("Order placed successfully and cart cleared");
  //             })
  //             .catch(error => {
  //               console.error("Error deleting items from cart:", error);
  //               alert("Order placed successfully, but failed to clear cart. Please try again later.");
  //             });
  //         } else {
  //           throw new Error("Failed to place one or more orders");
  //         }
  //       })
  //       .catch(error => {
  //         console.error("Error placing orders:", error);
  //         alert("Failed to place one or more orders. Please try again later.");
  //       });
  //   } else {
  //     alert("Please select at least one item to place the order.");
  //   }
  // };


//   const handleCheckboxChange = (itemId) => {
//     setSelectedItems(prevState => ({
//       ...prevState,
//       [itemId]: !prevState[itemId]
//     }));
//   };
//   const clearCart = () => {
//     fetch("http://localhost:3000/cart", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error("Failed to clear cart");
//         }
//         setCartItems([]);
//         setTotalQuantity(0);
//         console.log("Cart cleared successfully");
//       })
//       .catch((error) => {
//         console.error("Error clearing cart:", error);
//         alert("Failed to clear cart. Please try again later.");
//       });
//   };


  
  






//   return (
//     <>
   
//         <div className="d-flex justify-content-center">
//           <div></div>
//           <h3 className='text-center mb-5'>Add TO Cart Page</h3>
//         </div>
//         {

//           cartItems &&

//           cartItems.map((item) => (
//             <div className="d-flex justify-content-center">
//               <div className=" d-flex flex-column">
//                 <div className="card mb-3 mx-3 mainbox " style={{ maxwidth: "800px" }} key={item.id}>
//                   <div className="row g-0">
//                     <div className=" d-flex justify-content-between">
//                       <div className="">
//                         <div className="col-md-4 " >
//                           <img src={item.image} className="img-fluid rounded-start" alt="..." style={{ maxWidth: "300px", Height: "400px" }} />
//                         </div>
//                       </div>
//                       <div className="">
//                         <div className="col-md-8 ">
//                           <div className="card-body">
//                             <h5 className="card-title">{item.dishname}</h5>
//                             <p className="card-text">{item.description}</p>
//                             <p>{item.price}</p>

//                             <p className="card-text">
//                               <small className="text-body-secondary"><Cartincredcre id={item.id} amount={parseInt(item.amount)} onChange={() => handleAmountChange(item.id, newAmount)}  /></small>

//                             </p>
//                             <div className="d-flex justify-content-between">
//                               <button className='border-0' onClick={() => removeItem(item.id)}>
//                                 <i className="fa-solid fa-trash-can-arrow-up"></i>
//                               </button>
//                               <div className="text-end">
//                                 <input
//                                   type="checkbox"
//                                   className=' rounded-circle'
//                                   checked={selectedItems[item.id]}
//                                   onChange={() => handleCheckboxChange(item.id)}
//                                 />

//                               </div>
//                             </div>

//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//               </div>
//             </div>



//           ))}
//         <div className="d-flex justify-content-evenly mt-xl-5">
//           <div className="">
//             <button className='bg-danger bg-gradient rounded-2 text-white px-4 py-2 mx-3' onClick={clearCart} >Clear Cart</button>
//           </div>
//           <div className="">
//             <h2 className='text-end px-5' >Total Quantity-{totalQuantity}</h2>
//           </div>
          
//           {Object.values(selectedItems).some(value => value === true) && (
//             <Link to= {`/food/address/:${rid}/:${cid}/:${id}/:${cartid}`}>
//           <button className='bg-danger bg-gradient rounded-2 text-white px-4 py-2 mx-3' onClick={handleAddToCart}>Place Order</button>
//           </Link>
//         )}

//         </div>
//     </>
//   );
// }

// export default AddToCard;


import React, { useEffect, useState } from 'react';
import Cartincredcre from './Cartincredcre';
import './addtocart.css';
import { Link, useParams } from 'react-router-dom';

function AddToCard() {
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const { rid, cid, id } = useParams();
  const [cartid,setCartid] =useState();

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem('userdata'));
    const userId = storedUserData ? storedUserData.id : null;

    fetch("http://localhost:3000/cart")
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to fetch cart items');
        }
        return res.json();
      })
      .then(resp => {
        const userCartItems = resp.filter(item => item.userId === userId);
        setCartItems(userCartItems);
        setCartid(...userCartItems,id)
        const totalQty = userCartItems.reduce((total, item) => total + item.amount, 0);
        setTotalQuantity(totalQty);
      })
      .catch(error => {
        console.error('Error fetching cart items:', error);
      });
  }, []);

  const removeItem = (itemId) => {
    fetch(`http://localhost:3000/cart/${itemId}`, {
      method: 'DELETE'
    })
      .then(res => {
        if (!res.ok) {
          throw new Error('Failed to delete item');
        }
        // Update cart items after successful deletion
        const updatedCartItems = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCartItems);
        const totalQty = updatedCartItems.reduce((total, item) => total + item.amount, 0);
        setTotalQuantity(totalQty);
      })
      .catch(err => {
        console.error('Error deleting item:', err);
        alert('Failed to delete item. Please try again later.');
      });
  };
  const handleAddToCart = () => {
    const checkedItems = cartItems.filter(item => selectedItems[item.id]);

    if (checkedItems.length > 0) {
      // Array to store promises for each item order request
      const orderRequests = checkedItems.map(item =>
        fetch("http://localhost:3000/order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(item) // Send each item individually
        })
      );

      // Execute all order requests simultaneously
      Promise.all(orderRequests)
        .then(responses => {
          // Check if all order requests are successful
          const allRequestsSuccessful = responses.every(response => response.ok);
          if (allRequestsSuccessful) {
            // If all orders are successful, delete the selected items from the cart
            const deleteRequests = checkedItems.map(item =>
              fetch(`http://localhost:3000/cart/${item.id}`, {
                method: "DELETE"
              })
            );

            // Execute all delete requests simultaneously
            Promise.all(deleteRequests)
              .then(() => {
                // Clear the local state of cartItems and selectedItems
                setCartItems([]);
                setSelectedItems({});
                setTotalQuantity(0);
             
           

                // alert("Order placed successfully and cart cleared");
              })
              .catch(error => {
                console.error("Error deleting items from cart:", error);
                alert("Order placed successfully, but failed to clear cart. Please try again later.");
              });
          } else {
            throw new Error("Failed to place one or more orders");
          }
        })
        .catch(error => {
          console.error("Error placing orders:", error);
          alert("Failed to place one or more orders. Please try again later.");
        });
    } else {
      alert("Please select at least one item to place the order.");
    }
  };
  const handleCheckboxChange = (itemId) => {
    setSelectedItems(prevState => ({
      ...prevState,
      [itemId]: !prevState[itemId]
    }));
  };

  const clearCart = () => {
    fetch("http://localhost:3000/cart", {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Failed to clear cart");
        }
        // Clear cart items after successful clearing
        setCartItems([]);
        setTotalQuantity(0);
        console.log("Cart cleared successfully");
      })
      .catch(error => {
        console.error("Error clearing cart:", error);
        alert("Failed to clear cart. Please try again later.");
      });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <h3 className='text-center mb-5'>Add TO Cart Page</h3>
      </div>
      <div className=" d-flex flex-column">
      <div className=" d-flex justify-content-center">
      {cartItems && cartItems.map((item) => (
        <div key={item.id} className="card mb-3 mx-3 mainbox gap-5"   style={{ width: "80vw" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={item.image} className="img-fluid rounded-start" alt="Product" style={{ maxWidth: "400px", height: "400px" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.dishname}</h5>
                <p className="card-text">{item.description}</p>
                <p>{item.price}</p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    <Cartincredcre
                      id={item.id}
                      amount={parseInt(item.amount)}
                      onChange={() => handleAmountChange(item.id, newAmount)}
                    />
                  </small>
                </p>
                <div className="d-flex justify-content-between">
                  <button className='border-0' onClick={() => removeItem(item.id)}>
                    Remove
                  </button>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectedItems[item.id]}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      ))}
       </div>
       </div>
      <div className="d-flex justify-content-evenly mt-5">
        <button className='bg-danger rounderd text-white px-4 py-2 mx-3' onClick={clearCart}>Clear Cart</button>
        <h2 className='text-end'>Total Quantity: {totalQuantity}</h2>
        {Object.values(selectedItems).some(value => value === true) && (
          <Link to={`/food/address/${rid}/${cid}/${id}/${cartid}`}>
            <button className='bg-danger text-white px-4 py-2 mx-3' onClick={handleAddToCart}>Place Order</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default AddToCard;


