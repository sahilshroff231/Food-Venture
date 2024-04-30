import React, { useState } from 'react';
import './admin.css';


function Admin() {
    const [formData, setFormData] = useState({
        id: 6,
        dishName: '',
        image: '',
        price: '',
        amount: '',
        description: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); 

        
        fetch('http://localhost:3000/product', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Product added successfully');
                    
                    setFormData(prevState => ({
                        id: prevState.id + 1,
                        dishName: '',
                        image: '',
                        price: '',
                        amount: '',
                        description: ''
                    }));
                } else {
                    
                    console.error('Error adding product:', response.statusText);
                }
            })
            .catch(error => {
                
                console.error('Network error:', error);
            });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>

       <div className="container" style={{maxWidth:"70%"}} >
       <div className="">
                <h3 className='text-center'>Add Product </h3>
                </div>
            <div className='d-flex justify-content-center border border-2 rounded ' >
              
               
                
                    <form onSubmit={handleSubmit} className='formclass m-5 px-5'>
                    <div className="row align-content-center">
                   

                                <div className="col-lg-10 ">
                                    <div className="form-group">
                                    <label htmlFor="dishName" className="form-label text-black">Dish Name</label>
                                     <input type="text" className="form-control " id="dishName" name="dishName" value={formData.dishName} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="form-group">
                                    <label htmlFor="imageUrl" className="form-label text-black">Image URL</label>
                                     <input type="url" className="form-control " id="image" name="image" value={formData.imageUrl} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="col-lg-10">
                                    <div className="form-group">
                                    <label htmlFor="price" className="form-label text-black">Price</label>
                                   <input type="text" className="form-control " id="price" name="price" value={formData.price} onChange={handleChange} />
                                    </div>
                                </div>

                                <div className="col-lg-10">
                                    <div className="form-group">
                                    <label htmlFor="price" className="form-label text-black">Amount</label>
                            <input type="text" className="form-control " id="amount" name="amount" value={formData.amount} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-lg-10">
                                    <div className="form-group">
                                    <label htmlFor="description" className="form-label text-black">Description</label><br />
                                <textarea className="form-control " id="description" name="description" value={formData.description} onChange={handleChange} cols="30" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="mt-2">
                                   <button type="submit" className="btn bg-danger bg-gradient">Submit</button>

                                </div>
                                
                    </div>
                     
                        
                      
                       

                    </form>
                </div>
    </div>
                
           

        </>
    );
}

export default Admin;

