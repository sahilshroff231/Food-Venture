import { useEffect,useState } from "react";
import { createPortal } from 'react-dom'




const Mymodalsignup = ({ closeSignbtn }) => {

 
  const [id, idchange] = useState("");
  const [email, emailchange] = useState("");
  const [confpassword, confpasswordchange] = useState("");
  const [password, passwordchange] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
        

    fetch("http://localhost:3000/user",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(userdata)

  }).then((res)=>{
     alert("save successfully")
     navigate('/');

    }).catch((err)=>{
         console.log(err.message)
    })
  }
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    }
  })
  return createPortal(
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-containersignup ">
        <form onSubmit={handleSubmit} >
        <div className="">
            <button className=' px-2  cross-btn text-white' onClick={closeSignbtn}><i class="fa-solid fa-xmark"></i></button>
            <br />
            <label for="exampleInputEmail1" className="form-label text-white">UserName</label>
            <input type="text" value={id} onChange={e=>idchange(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <button className=' px-2  cross-btn text-white' onClick={closeSignbtn}><i class="fa-solid fa-xmark"></i></button>
            <br />
            <label for="exampleInputEmail1" className="form-label text-white">Email address</label>
            <input type="email"  value={email} onChange={e=>emailchange(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label text-white">Confirm  Password</label>
            <input type="password"  value={confpassword} onChange={e=>confpasswordchange(e.target.value)} className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label text-white"> Password</label>
            <input type="password"  value={password} onChange={e=>passwordchange(e.target.value)} className="form-control bg-gradient" id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn  btn bg-danger bg-gradient ">Sign Up</button>
        </form>
      </div>
    </>, document.getElementById("mysignupportal")
  )

}
export default Mymodalsignup;