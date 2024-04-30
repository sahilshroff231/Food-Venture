import React, { useEffect, useState } from 'react';
import './catagory.css';
import { useParams } from 'react-router-dom';

function Nonvegcatagory() {
  const [nonvegcatagory, setnonvegCatagory] = useState([]);
const {rid} = useParams()

console.log(rid)
  useEffect(() => {
    fetch('http://localhost:3000/nonvcatagory')
      .then((res) => res.json())
      .then((resp) => {
        setnonvegCatagory(resp[0]);
        console.log(nonvegcatagory)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
     
      <div className='container'>
        <div className='row justify-content-center gap-5'>
         
            <div className="col-md-4 mb-3 " key={nonvegcatagory.cid} style={{width:"20vw"}}>
              <div className="card boxcard">
                <img src={nonvegcatagory.image} className="img-fluid" alt="..." style={{width:"100%", height: "30vh" }} />
                <div className="card-body">
                  <h5 className="card-title">{nonvegcatagory.catname}</h5>
                  <p className="card-text">{nonvegcatagory.discription}</p>
                  <a href={`/food/product/${rid}/${nonvegcatagory.cid}`} className="btn bg-danger bg-gradient text-white">View Items</a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Nonvegcatagory;