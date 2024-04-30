import React, { useEffect, useState } from 'react';
import './catagory.css';
import { useParams } from 'react-router-dom';

function Chinesecatagory() {
  const [Chinesecatagory, setchineseCatagory] = useState([]);
const {rid} = useParams()

console.log(rid)
  useEffect(() => {
    fetch('http://localhost:3000/chinesecatagory')
      .then((res) => res.json())
      .then((resp) => {
        setchineseCatagory(resp[0]);
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
         
            <div className="col-md-4 mb-3 " key={Chinesecatagory.cid} style={{width:"20vw"}}>
              <div className="card boxcard">
                <img src={Chinesecatagory.image} className="img-fluid" alt="..." style={{width:"100%", height: "30vh" }} />
                <div className="card-body">
                  <h5 className="card-title">{Chinesecatagory.catname}</h5>
                  <p className="card-text">{Chinesecatagory.discription}</p>
                  <a href={`/food/product/${rid}/${Chinesecatagory.cid}`} className="btn bg-danger bg-gradient text-white">View Items</a>
                </div>
              </div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Chinesecatagory;