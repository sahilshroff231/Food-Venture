import React, { useEffect, useState } from 'react'
import IMAGES from '../IMAGES/Img'
import './restorent.css'
import { Link } from 'react-router-dom';

function Restorent() {
  const [resData, setResData] = useState([]);
  // const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    fetch('http://localhost:3000/restaurents')
      .then((res) => {
        console.log('Response status:', res.status);
        return res.json();
      })
      .then((resp) => {
        console.log('Response data:', resp);
        setResData(resp);
      })
      .catch((error) => {
        setError(error); // Set error state if there's an error in fetching data
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
   <>
    
      <div className='mt-5'>
        <h1 className='text-center fw-bold'>BEST RESTAURENTS OF AGARA</h1>
      </div>
      <div className='d-flex justify-content-center mt-5 '>
        <div className=' d-flex flex-column'>
          <div>
            
            <div className='d-flex m-5 gap-10 flex-column '>
            { resData && resData.map((item) => (
              
                <div className="card mb-5 mainbox  "  key={item.rid}  >
                  <div className="row g-0">
                  <div className='col-md-4'>
                  <div className=''>
                      <img src={item.image} className="img-fluid rounded-start " style={{width:"20vw" , height:"30vh"}}  alt="..." />
                    </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title text-center fs-5">{item.resname}</h5>
                        <p className="card-text">{item.discription}</p>
                        <div className="d-flex">
                          <span className="rating">{item.rating}<i className="fa-solid fa-star " id='staricon'></i></span>
                        </div>
                        <div className='mt-5'>
                         <Link to={`/food/catagory/${item.rid}`} className='text-decoration-none text-white bg-danger bg-gradient rounded px-4 py-2'>View More</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restorent