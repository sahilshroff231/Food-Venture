

import React ,{useState,useEffect} from 'react';
import IMAGES from '../IMAGES/Img';
import { Link, useParams } from 'react-router-dom';
import Mymodal from './Login';
import MyAdminmodal from './Loginadmin';
import Mymodalsignup from './Signup';
import './header.css'

// { storeAmount, userId, logOut, showModal, showsignModal, showadminModal, setsignShowmodal, setShowmodal, setadminShowmodal, closeSignbtn, closebtn, handleclose }
function Navbar() {
    const [storeAmount, setStoreAmount] = useState(0);
    const [userId, setUserId] = useState();
    const [adminId, setAdminId] = useState();
    const [showWholeModal, setShowWholeModal] = useState(true);
    const [showModal, setShowmodal] = useState(false);
    const [showadminModal, setadminShowmodal] = useState(false);
    const {rid,cid,id}=useParams();
  
    const [userdata, setUserdata] = useState(null);
    const [admindata, setAdmindata] = useState(null);
  
  console.log(userdata, admindata)
  
    useEffect(() => {
      const userdata = localStorage.getItem('userdata');

      if (userdata) {
        
        const { id } = JSON.parse(userdata);
        setShowWholeModal(false);
        setUserdata(userdata);
        
        setUserId(id);
        cartData();
  
      } 
    }, []);
  
      
  
    useEffect(() => {
      const AdminData = localStorage.getItem('adminData');
      
      if (AdminData) {
        
        const { id:Aid } = JSON.parse(AdminData);
        setShowWholeModal(false);
       setAdmindata(AdminData)
        setAdminId(Aid)
        cartData();
      } 
    }, []);
    const closebtn = () => {
      { setShowmodal(false) }
      { setadminShowmodal(false) }
    }
   
  
    const [showsignModal, setsignShowmodal] = useState(false);
    const closeSignbtn = () => {
      { setsignShowmodal(false) }
  
    }
    const logOut = () => {
    
      localStorage.removeItem('userdata');
      setUserdata(null);
      localStorage.removeItem('adminData');
      setAdmindata(null);
  
      
      fetch("http://localhost:3000/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId: userId }) 
      })
      .then(response => {
        if (response.ok) {
          console.log("Cart data cleared successfully.");
        } else {
          throw new Error("Failed to clear cart data.");
        }
      })
      .catch(error => {
        console.error("Error clearing cart data:", error);
      });
    }
  
  const cartData = () => {

    const storedData = JSON.parse(localStorage.getItem('userdata'));
    const userId = storedData ? storedData.id: null;
  
    fetch("http://localhost:3000/cart")
      .then(res => res.json())
      .then(resp => {
     
        const userCartItems = resp.filter(item => item.userId === userId);
  
        if (userCartItems.length > 0) {
          
          const totalQty = userCartItems.reduce((total, item) => total + item.amount, 0);
          setStoreAmount(totalQty);
        } else {
          console.log('No cart items found for the user');
          
        }
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
       
      });
  };
  return (
    <nav className="navbar navbar-expand-lg navbg">
      <div className="container-fluid " style={{height:"50px"}}>
        <a className="navbar-brand" href="#"><img src={IMAGES.img1} style={{ width: '80px', height: '80px' }} alt="" /></a>
        <button className="navbar-toggler text-bg-danger" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <a className="nav-link -5 text-white fw-medium" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link -5 text-white fw-medium" href="#">Add Restaurents </a>
            </li>
            { showWholeModal && (
               <>
            <li className="nav-item">
              <div class="dropdown">
                <button class="btn  fs-5 fw-bold text-white dropdown-toggle border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Log In
                </button>
                <ul class="dropdown-menu bg-transparent">
                  <li>
                    <a className="nav-link text-white  fw-medium " onClick={() => setShowmodal(true)}>Log in as User</a>
                    {showModal && <Mymodal closebtn={closebtn} />}
                  </li>
                  <li>
                    <a className="nav-link text-white fw-medium" onClick={() => setadminShowmodal(true)}>Log in as Admin</a>
                    {showadminModal && <MyAdminmodal closebtn={closebtn}  />}
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-5 text-white fw-medium" onClick={() => setsignShowmodal(true)}>Sign Up </a>
              {showsignModal && <Mymodalsignup closeSignbtn={closeSignbtn} />}
            </li>
                   </>
                 )}
           
            <li>
              <a className="nav-link text-white fs-5 fw-medium" href={`/food/addtocart/${rid}/${cid}/${id}`} >
                <span><i className="fa-solid fa-cart-shopping position-relative  "></i>
                  <span className='bg-danger bg-gradient  rounded-5 p-1 postion-absolute cartval'>{storeAmount}</span>
                </span>
              </a>
            </li>
            {admindata  && (
                <li>
                <a className='nav-link text-white  fw-medium '  href="/food/adminhome">Admin Page</a>
              </li>
              
               )}
            {((userdata || admindata ) ) && (
              <>
                <li>
                  <a className="nav-link text-white fs-5 fw-medium" href="/">
                    <span><i class="fa-solid fa-user"></i></span>
                    (<span >{userId || adminId }</span>)
                   
                  </a>
                </li>
                <li>
                  <a className='nav-link text-white fs-5 fw-medium' onClick={logOut} href="/">Log Out</a>
                </li>
              </>
             )}
          
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
