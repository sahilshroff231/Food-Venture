import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';

function Adminhome() {

    const [productinfo,productinfochange]= useState(null);
    const navigate=useNavigate();
    const adminData = localStorage.getItem('adminData');

    const LoadDetails=(pdid)=>{
      
        navigate(`/food/details/${pdid}`);
    }
    useEffect (()=>{
     
        fetch('http://localhost:3000/product').then((res)=>{
              return res.json();
      }).then((resp)=>{
           productinfochange(resp);
      }).catch((err)=>{
            console.log(err.message);
      })

  },[])
  const Removefunc = (id)=>{
    if(window.confirm('Do You Want To Remove')){
      fetch(`http://localhost:3000/product/${id}`,{
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


  const Loadedit= (pdid)=>{
    navigate(`/food/edit/${pdid}`);

   }
   if(adminData){
  return(
   
           <div   className="container">
                 <div className="card" >
                    <div className="card-title">
                         <h2>Product List</h2>
                    </div>
                    <div className="card-body">
                        <div className="float-start">

                            <Link to="/food/admin" className="btn btn-success mx-5 my-2"> Add New Product(+)</Link>
                            <Link to="/food/restrohome" className="btn btn-success mx-5 my-2"> Go To Restaurent Page</Link>
                        </div>
                          <table className="table table-bordered">
                            <thead className="table-dark text-white">
                               <tr >
                                <td>id</td>
                                <td>DishName</td>
                                <td>image url</td>
                                <td>Price</td>
                                <td>quantity</td>
                                <td>Description</td>
                                <td>Buttons</td>
                                
                               </tr>
                            </thead>
                            <tbody>
                               
                                 {
                                    productinfo &&
                                    productinfo.map(item=>(
                                          <tr key={item.id}>
                                                <td>{item.id}</td>
                                                <td>{item.dishname}</td>
                                                <td>{item.image}</td>
                                                <td>{item.price}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.description}</td>
                                                
                                                
                                                
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
else{
      return(
      <div><p>This Path is restricted please login as Admin</p></div>
      )
}
}

export default Adminhome