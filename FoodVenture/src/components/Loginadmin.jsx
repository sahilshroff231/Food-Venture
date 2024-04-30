import { useEffect, useState } from "react";
import { createPortal } from 'react-dom'
import { toast,ToastContainer} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from "react-router-dom";





const MyAdminmodal = ({ closebtn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmitadmin = () => {
      if (validation()) {
        fetch("http://localhost:3000/admin")
          .then((res) => {
            if (!res.ok) {
              throw new Error('Failed to fetch admin data');
            }
            return res.json();
          })
          .then((resp) => {
            const admin = resp.find((admin) => admin.email === email && admin.password === password);
            if (admin) {
              alert("Login successful");
              localStorage.setItem('adminData', JSON.stringify(admin));
              closebtn();
              navigate('/food/adminhome');
            } else {
              alert("Please enter valid credentials");
            }
          })
          .catch((err) => {
            console.error('Error:', err);
            alert("Login failed. Please try again later.");
          });
      }
    };
    
    
  
    // const handleSubmitadmin = (e) => {
    //   e.preventDefault();
    //   if (validation()) {
    //     fetch("http://localhost:3000/admin")
    //       .then((res) => res.json())
    //       .then((resp) => {
    //         const user = resp.find(user => user.email === email && user.password === password);
    //         if (user) {
    //           alert("Login successful");
    //           closebtn(); // Close the modal after successful login
    //           navigate('/food/adminhome'); // Navigate to dashboard after successful login
    //         } else {
    //           alert("Please enter valid credentials");
    //         }
    //       })
    //       .catch((err) => {
    //         console.log('Login failed: ', err);
    //         alert("Login failed. Please try again later.");
    //       });
    //   }
    // };
  
    const validation = () => {
      let result = true;
      if (email.trim() === '') {
        result = false;
        alert('Please Enter User Email');
      }
      if (password.trim() === '') {
        result = false;
        alert('Please Enter Password');
      }
      return result;
    };
  
    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
      }
    }, []);
  
    return createPortal(
      <>
        <div className="modaladmin-wrapper"></div>
        <div className="modal-container">
          <form onSubmit={handleSubmitadmin}>
            <div className="mb-3">
              <button className='px-2 cross-btn text-white' onClick={closebtn}><i className="fa-solid fa-xmark"></i></button>
              <br />
              <label htmlFor="exampleInputEmail1" className="form-label text-white">Admin Email address</label>
              <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" className="btn bg-danger bg-gradient">Log In</button>
          </form>
        </div>
      </>, 
      document.getElementById("myadminloginportal")
    );
  };
  
  export default MyAdminmodal