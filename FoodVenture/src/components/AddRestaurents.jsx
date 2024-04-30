import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddRestaurents() {
    const [id, setId] = useState();
    const [formData, setFormData] = useState({
        id: 1, 
        resname: '',
        image: '',
        description: '',
        rating:''
    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Send form data to the server
        fetch('http://localhost:3000/restaurents', {
            method: 'POST', // Assuming you're adding a new product
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id:id,
                ...formData
            })
        })
            .then(response => {
                if (response.ok) {
                    alert('Restaurent added successfully');
                    // Clear form data and increment ID
                    setFormData(prevState => ({
                        id: prevState.id + 1,
                        resname: '',
                        image: '',
                        description: '',
                        rating:''
                    }));
                } else {
                    // Handle error response from server
                    console.error('Error adding Restaurent:', response.statusText);
                }
            })
            .catch(error => {
                // Handle network error
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

        <div className="container"  style={{width:"50vw"}} >
        <div className="">
                 <h3 className='text-center'>Add Restaurents </h3>
                 </div>
             <div className='d-flex justify-content-center border border-2 rounded ' >
               
                
                 
                     <form onSubmit={handleSubmit} className='formclass m-5 px-5' >
                     <div className="row align-content-center"  >
                                 <div className="col-lg-10 ">
                                     <div className="form-group">
                                     <label htmlFor="resName" className="form-label text-black">Res Name </label>
                                      <input type="text" className="form-control " id="resName" name="resname" value={formData.resname} onChange={handleChange} />
                                     </div>
                                 </div>
                                 <div className="col-lg-10">
                                     <div className="form-group">
                                     <label htmlFor="imageUrl" className="form-label text-black">Image Url</label>
                                      <input type="url" className="form-control " id="image" name="image" value={formData.image} onChange={handleChange} />
                                     </div>
                                 </div>
 
                                 <div className="col-lg-10">
                                     <div className="form-group">
                                     <label htmlFor="price" className="form-label text-black">Description</label>
                                    <input type="text" className="form-control " id="description" name="description" value={formData.description} onChange={handleChange} />
                                     </div>
                                 </div>
 
                                 <div className="col-lg-10">
                                     <div className="form-group">
                                     <label htmlFor="price" className="form-label text-black">Rating</label>
                                     <input type="text" className="form-control " id="rating" name="rating" value={formData.rating} onChange={handleChange} />
                                     </div>
                                 </div>
                     
                                 <div className="mt-2">
                                    <button type="submit" className="btn bg-danger bg-gradient text-white">Submit</button>
 
                                 </div>
                                 
                     </div>
                      
                         
                       
                        
 
                     </form>
                 </div>
     </div>
                 
            
 
         </>
    );
}

export default AddRestaurents;
