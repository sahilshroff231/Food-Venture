import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Restroinfoedit = () =>{

    const {id} = useParams();
   
    useEffect (()=>{
        fetch(`http://localhost:3000/restaurents/${id}`).then((res)=>{
              return res.json();
      }).then((resp)=>{
         
           ridchange(resp.id);
           resnamechange(resp.resname);
           imagechange(resp.image);
           ratingchange(resp.rating);
           discriptionchange(resp.discription);

      }).catch((err)=>{
            console.log(err.message);
      })

  },[])

  const [rid,ridchange]=useState("");
  const [resname,resnamechange]=useState("");
  const [image,imagechange]=useState("");
  const [rating,ratingchange]=useState("");
  const [discription,discriptionchange]=useState("");
  const navigate = useNavigate();
  const handlesubmit =(e)=>{
            e.preventDefault();
             const resinfo={rid,resname,image,rating,discription};
          
            fetch(`http://localhost:3000/restaurents/${rid}`,{
              method:"PUT",
              headers:{"content-type":"application/json"},
              body:JSON.stringify(resinfo)

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
                                      <label >rid</label>
                                      <input value={rid} disabled='disabled' type="text" name="" id="rid" className="form-control" placeholder="" aria-describedby="helpId"/>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                      <label >Res Name</label>
                                      <input required value={resname} onChange={e=>resnamechange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>

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
                                      <label >Rating</label>
                                      <input  required value={rating} onChange={e=>ratingchange(e.target.value)} type="text" name="" id="" className="form-control" placeholder="" aria-describedby="helpId"/>
  
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
                                            <button  className= "btn btn-danger btn-gradient m-3" type="submit ">Save</button>
                                            <Link to='/food/restrohome' className="btn btn-danger btn-gradient">Back</Link>
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
export default Restroinfoedit;