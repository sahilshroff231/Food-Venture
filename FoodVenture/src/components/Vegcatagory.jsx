import React, { useEffect, useState } from 'react';
import './catagory.css';
import { useParams } from 'react-router-dom';

function Vegcatagory() {
  const [vegcatagory, setvegCatagory] = useState([]);
const {rid} = useParams()

console.log(rid)
  useEffect(() => {
    fetch(`http://localhost:3000/vegcatagory`)
      .then((res) => res.json())
      .then((resp) => {
        setvegCatagory(resp[0]);
        console.log(vegcatagory)
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
    
      <div className='container'>
        <div className='row justify-content-center gap-5'>
         
            <div className="col-md-4 mb-3 " key={vegcatagory.cid} style={{width:"20vw"}}>
              <div className="card boxcard">
                <img src={vegcatagory.image} className="img-fluid" alt="..." style={{width:"100%", height: "30vh" }} />
                <div className="card-body">
                  <h5 className="card-title">{vegcatagory.catname}</h5>
                  <p className="card-text">{vegcatagory.discription}</p>
                  <a href={`/food/vegproduct/${rid}/${vegcatagory.cid}`} className="btn bg-danger bg-gradient text-white">View Items</a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Vegcatagory;