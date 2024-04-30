import React, { useEffect, useState } from 'react';
import './catagory.css';
import { useParams } from 'react-router-dom';

function Dessertcatagory() {
  const [dessertcatagory, setDessertCatagory] = useState([]);
const {rid} = useParams()

console.log(rid)
  useEffect(() => {
    fetch('http://localhost:3000/dessertcatagory')
      .then((res) => res.json())
      .then((resp) => {
        setDessertCatagory(resp[0]);
        
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <>
     
      <div className='container'>
        <div className='row justify-content-center gap-5'>
         
            <div className="col-md-4 mb-3 " key={dessertcatagory.cid} style={{width:"20vw"}}>
              <div className="card boxcard">
                <img src={dessertcatagory.image} className="img-fluid" alt="..." style={{width:"100%", height: "30vh" }} />
                <div className="card-body">
                  <h5 className="card-title">{dessertcatagory.catname}</h5>
                  <p className="card-text">{dessertcatagory.discription}</p>
                  <a href={`/food/product/${rid}/${dessertcatagory.cid}`} className="btn bg-danger bg-gradient text-white">View Items</a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Dessertcatagory;