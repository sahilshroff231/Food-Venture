import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';

function Restaurenthome() {

    const [resttroinfo,restroinfochange]= useState(null);
    const navigate=useNavigate();

    const LoadDetails=(rid)=>{
      
        navigate(`/res/details/${rid}`);
    }
    useEffect (()=>{
        fetch('http://localhost:3000/restaurents').then((res)=>{
              return res.json();
      }).then((resp)=>{
           restroinfochange(resp);
      }).catch((err)=>{
            console.log(err.message);
      })

  },[])
  const Removefunc = (id)=>{
    if(window.confirm('Do You Want To Remove')){
      fetch(`http://localhost:3000/restaurents/${id}`,{
            method:"DELETE",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(productinfo)

        }).then((res)=>{
           alert("Removed successfully")
           window.location.reload();
           navigate('/');

          }).catch((err)=>{
               console.log(err.message)
          })
    }
}


  const Loadedit= (id)=>{
    navigate(`/res/edit/${id}`);

   }
  return(
   
           <div   className="container">
                 <div className="card" >
                    <div className="card-title">
                         <h2>RestaurentList</h2>
                    </div>
                    <div className="card-body">
                        <div className="float-start">

                            <Link to="/food/addrestaurents" className="btn btn-success"> Add New restaurent(+)</Link>
                        </div>
                          <table className="table table-bordered">
                            <thead className="table-dark text-white">
                               <tr >
                                <td>id</td>
                                <td>image url</td>
                                <td>resname</td>
                                <td>Discription</td>
                                <td>Rating</td>
                                <td>Buttons</td>
                                
                               </tr>
                            </thead>
                            <tbody>
                               
                                 {
                                    resttroinfo &&
                                    resttroinfo.map(item=>(
                                          <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.image}</td>
                                                <td>{item.resname}</td>
                                                <td>{item.discription}</td>
                                                <td>{item.rating}</td>
                                               
                                                
                                                
                                                
                                                <td >
                                                      <a  onClick={()=>{Loadedit(item.id)}}className="btn btn-success m-2">Edit</a>
                                                      <a  onClick={()=>{Removefunc(item.id)}}className="btn btn-primary m-2">Remove</a>
                                                      <a  onClick={()=>{LoadDetails(item.id)}} className="btn btn-danger m-2" >Details</a>
                                                </td>

                                          </tr>
                                    ))
                                 }
                            
                            </tbody>
    
                          </table>
   </div>
   </div>
   </div>

  )
}

export default Restaurenthome