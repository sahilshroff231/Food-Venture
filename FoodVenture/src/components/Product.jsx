import React, { useEffect, useState } from 'react';
import Items from './Items';
import './Items.css';
import { useParams } from 'react-router-dom';

function Product() {
  const [productdata, setProductdata] = useState([]);
 
  const { rid } = useParams();


  useEffect(() => {
    

    fetch('http://localhost:3000/product') 
      .then(res => res.json())
      .then(resp => {
         
        const filteredProducts = resp.filter(product => product.rid === rid)
         setProductdata(filteredProducts)
        console.log(filteredProducts)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [rid]); 

  return (
    <div className='d-flex justify-content-center'>
      <div className='main'>
        <div className='container'>
          <div className='row'>
            {productdata && productdata?.map(curItems => (
              <div key={curItems.id} className='col-md-3 mb-3'>
                <Items  {...curItems} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
