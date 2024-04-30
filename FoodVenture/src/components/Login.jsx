import React, { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Mymodal = ({ closebtn,handleclose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    
    if (validation()) {
      fetch("http://localhost:3000/user")
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then((resp) => {
          console.log(resp)
          const user = resp.find(user => user.email === email && user.password === password);
          if (user) {
            localStorage.setItem('userdata', JSON.stringify(user));
            alert("Login successful");
            closebtn();
           
       

            navigate('/'); 
          } else {
            alert("Please enter valid credentials");
          }
        })
        .catch((err) => {
          console.log('Login failed: ', err)
          alert("Login failed. Please try again later.");
        });
    }
  }

  const validation = () => {
    let result = true;
    if (!email.trim()) {
      result = false;
      toast.error('Please enter user email');
    }
    if (!password.trim()) {
      result = false;
      toast.error('Please enter password');
    }
    return result;
  }

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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <button className='px-2 cross-btn text-white' onClick={closebtn}><i className="fa-solid fa-xmark"></i></button>
            <br />
            <label htmlFor="exampleInputEmail1" className="form-label text-white">Email address</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label text-white">Password</label>
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" name="password" />
          </div>
          <button type="submit" className="btn bg-danger bg-gradient">Log In</button>
        </form>
      </div>
    </>, document.getElementById("myloginportal")
  );
}

export default Mymodal;

