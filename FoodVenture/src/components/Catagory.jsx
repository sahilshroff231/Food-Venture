import React, { useEffect, useState } from 'react';
import './catagory.css';
import { useParams } from 'react-router-dom';
import Nonvegcatagory from './Nonvegcatagory';
import Vegcatagory from './Vegcatagory';
import Dessertcatagory from './Dessertcatagory';
import Drinkcatagory from './Drinkcatagory';
import Chinesecatagory from './Chinisecatagory';
import Bekarycatagory from './Bekarycatagory';

function Catagory() {

  return (
    <>
      <div className='mt-5'>
        <h1 className='text-center fw-bold'>Food Category List <span><i className="fa-solid fa-truck"></i></span></h1>
      </div>
    
          {<>
          <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
           <div className=" d-flex">
            <Nonvegcatagory/>
            <Vegcatagory/>
            <Chinesecatagory/>
            </div>
            </div>
            <div className="d-flex justify-content-center">
            <div className="d-flex">
            <Dessertcatagory/>
            <Drinkcatagory/>
            <Bekarycatagory/>
            </div>
            </div>
            </div>
            
            </>
          }
     
    </>
  );
}

export default Catagory;
