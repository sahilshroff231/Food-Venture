import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Admininfoedit = () =>{

    const {pdid} = useParams();
   
    useEffect (()=>{
        fetch(`http://localhost:3000/product/${pdid}`).then((res)=>{
              return res.json();
      }).then((resp)=>{
         
           pidchange(resp.id);
           dishnamechange(resp.dishname);
           imagechange(resp.image);
           pricechange(resp.price);
           amountchange(resp.amount);
           discriptionchange(resp.description);

      }).catch((err)=>{
            console.log(err.message);
      })

  },[])

  const [pid,pidchange]=useState("");
  const [dishname,dishnamechange]=useState("");
  const [image,imagechange]=useState("");
  const [price,pricechange]=useState("");
  const [amount,amountchange]=useState("");
  const [discription,discriptionchange]=useState("");
  const navigate = useNavigate();
  const handlesubmit =(e)=>{
            e.preventDefault();
             const productinfo={dishname,image,price,amount,discription};
          
            fetch(`http://localhost:3000/product/${pdid}`,{
              method:"PUT",
              headers:{"content-type":"application/json"},
              body:JSON.stringify(productinfo)

          }).then((res)=>{
             alert("save successfully")
            //  navigate('/');

            }).catch((err)=>{
                 console.log(err.message)
            })
  }
    return(
        <>
        <div className="row">
        <div className="offset-lg-3 col-lg-6">
            <form className="container" onSubmit={handlesubmit}>
                <div className="card">
                     <div className="card-title">
                           <h2>Product Edit</h2>
                        </div> 
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                      <label >id</label>
                                      <input value={pid} disabled='disabled' type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                      <label >DishName</label>
                                      <input required value={dishname} onChange={e=>dishnamechange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>

                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                      <label >Imageurl</label>
                                      <input  required value={image} onChange={e=>imagechange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
      
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                      <label >Price</label>
                                      <input  required value={price} onChange={e=>pricechange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
  
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                      <label className="form-check-label">Amount</label>
                                      <input  required value={amount} onChange={e=>amountchange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                                      
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-check">
                                      <label className="form-check-label">Discription</label>
                                      <input  required value={discription} onChange={e=>discriptionchange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
                                      
                                    </div>
                                </div>
                                   <div className="col-lg-12">
                                       <div className="form-group">
                                            <button  className= "btn bg-danger bg-gradient  text-white m-3" type="submit ">Save</button>
                                            <Link to='/food/adminhome' className="btn btn-danger bg-gradient">Back</Link>
                                       </div>

                                </div>
                            </div>
                        </div>
                </div>
            </form>
        </div>
      </div>
      </>
    );

}
export default Admininfoedit;