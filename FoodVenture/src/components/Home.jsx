// import React, { useEffect, useState } from 'react'
// import IMAGES from '../IMAGES/Img'
// import './home.css'
// import Mymodal from './Login';
// import MyAdminmodal from './Loginadmin';
// import Mymodalsignup from './Signup';
// import { useLocation } from 'react-router-dom';
// import Items from './Items';

// function Home() {
//   const [storeAmount, setStoreAmount] = useState(0);
//   const [userId, setUserId] = useState();
//   const [showWholeModal, setShowWholeModal] = useState(false);
//   const [showModal, setShowmodal] = useState(false);
//   const [showadminModal, setadminShowmodal] = useState(false);

//   const [userdata, setUserdata] = useState(null);



//   useEffect(() => {
//     const userdata = localStorage.getItem('userdata');
//     if (userdata) {
//       // User is logged in, hide login and sign up, show logout and user icon
//       const { id } = JSON.parse(userdata);
//       setShowWholeModal(false);
//       setUserdata(userdata);
//       setUserId(id);
//       cartData();

//     } else {
//       // User is not logged in, show login and sign up, hide logout and user icon
//       setShowWholeModal(true);
//       setUserdata(null);
//     }
//   }, []);

//   const closebtn = () => {
//     { setShowmodal(false) }
//   }
//   const handleclose=()=>{
//     window.location.reload();
//   }

//   const [showsignModal, setsignShowmodal] = useState(false);
//   const closeSignbtn = () => {
//     { setsignShowmodal(false) }

//   }
//   const logOut = () => {
//     // Clear userdata from local storage
//     localStorage.removeItem('userdata');
//     setUserdata(null);

//     // Clear cart data associated with the user
//     fetch("http://localhost:3000/cart", {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ userId: userId }) // Include userId in the request body
//     })
//     .then(response => {
//       if (response.ok) {
//         console.log("Cart data cleared successfully.");
//       } else {
//         throw new Error("Failed to clear cart data.");
//       }
//     })
//     .catch(error => {
//       console.error("Error clearing cart data:", error);
//     });
//   }

// const cartData = () => {
//   // Retrieve user ID from local storage
//   const storedData = JSON.parse(localStorage.getItem('userdata'));
//   const userId = storedData ? storedData.id: null;

//   fetch("http://localhost:3000/cart")
//     .then(res => res.json())
//     .then(resp => {
//       // Filter cart items by user ID
//       const userCartItems = resp.filter(item => item.userId === userId);

//       if (userCartItems.length > 0) {
//         // Calculate total quantity of items in the cart
//         const totalQty = userCartItems.reduce((total, item) => total + item.amount, 0);
//         setStoreAmount(totalQty);
//       } else {
//         console.log('No cart items found for the user');
//         // Handle the case where no cart items are found for the user
//       }
//     })
//     .catch(error => {
//       console.error('Error fetching cart data:', error);
//       // Handle error
//     });
// };
//   return (
//     <>

//       <div className='home'>
//         <nav className="navbar navbar-expand-lg bg-transparent">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#"><img src={IMAGES.img1} style={{ width: '80px', height: '80px' }} alt="" /></a>
//             <button className="navbar-toggler text-bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

//                 <li className="nav-item">
//                   <a className="nav-link text-white fs-5 fw-medium" href="#">Add Restaurents </a>
//                 </li>
//                 {showWholeModal && (
//                   <>

//                     <li className="nav-item">
//                       <div class="dropdown">
//                         <button class="btn text-white fs-5 fw-bold dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                           Log In
//                         </button>
//                         <ul class="dropdown-menu bg-transparent">

//                           <li>  <a className="nav-link text-white  fw-medium" onClick={() => setShowmodal(true)}  >Log in as User</a>
//                             {showModal && <Mymodal closebtn={closebtn} handleclose={handleclose} />}</li>
//                           <li> <a className="nav-link text-white  fw-medium" onClick={() => setadminShowmodal(true)} >Log in as Admin</a>
//                             {showadminModal && <MyAdminmodal closebtn={closebtn} />}</li>
//                         </ul>
//                       </div>

//                     </li>
//                     <li className="nav-item">
//                       <a className="nav-link text-white  fs-5 fw-medium" onClick={() => setsignShowmodal(true)} >Sign Up </a>
//                       {showsignModal && <Mymodalsignup closeSignbtn={closeSignbtn} />}
//                     </li>

//                   </>
//                 )}

//                 <li>
//                   <a className="nav-link text-white fs-5 fw-medium" href="/food/addtocart"><span><i className="fa-solid fa-cart-shopping position-relative  "></i><span className='bg-danger bg-gradient  rounded-5 p-1 postion-absolute cartval'> {storeAmount}</span></span></a>
//                 </li>

//                 {userdata && (
//                   <>
//                     <li>
//                       <a className="nav-link text-white fs-5 fw-medium" href="/"><span><i class="fa-solid fa-user"></i></span>(<span >{userId}</span>)</a>
//                     </li>
//                     <li>
//                       <a className='nav-link text-white fs-5 fw-medium' onClick={logOut} href="/">Log Out</a>
//                     </li>
//                   </>
//                 )}
//                 {/* <li>
//                   <a className='nav-link text-white fs-5 fw-medium' onClick={logOut} href="/">Log Out</a>
//                 </li>
//                  <li className="nav-item">
//                   <a className="nav-link text-white fs-5 fw-medium" href="#"><span><i class="fa-solid fa-user"></i></span></a>
//                 </li> */}


//               </ul>

//             </div>
//           </div>
//         </nav>
//   <div className=' homeHeading d-flex justify-content-center '>

//     <h1 > Food Express</h1>

//   </div>
//   <div className='d-flex justify-content-center text-white fs-5 text-center '>
//     <h2>Find the best restaurants, cafés <br /> and bars in India</h2>
//   </div>
// </div>
//     </>
//   )
// }

// export default Home;




// Home.js

import React, { useEffect, useState } from 'react';
import IMAGES from '../IMAGES/Img';
import './home.css';
// import Navbar from './Navbar';
// import Mymodal from './Login';
// import MyAdminmodal from './Loginadmin';
// import Mymodalsignup from './Signup';

function Home() {
  // Your existing code here...
  return (
    <>
      <div className='home'>
        <div className=' homeHeading d-flex justify-content-center  '>
           
          <h1 className='m-5 p-5' > Food Express</h1>

        </div>
        <div className='d-flex justify-content-center text-white fs-5 text-center '>
          <h2>Find the best restaurants, cafés <br /> and bars in India</h2>
        </div>
      </div>
   
    </>
  )
}

export default Home;
