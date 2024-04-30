import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import IMAGES from '../IMAGES/Img';



function Restrolist() {
  return (
    <>
      <div className="Container d-flex justify-content-center flex-column mt-5">
         <div className="d-flex justify-content-center">
            <h1 className='text-center'> Popular locations in India </h1>
            <div><img src={IMAGES.flag} alt="" style={{width:"50px", height:'50px'}} />
            
            </div>
         </div>
         <div className=" d-flex justify-content-center mt-5">
         <p className='text-center'>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all.<br/> Explore menus, <br/>and millions of restaurant photos and reviews from users just like you, to find your next great meal.</p>
          </div>
          
       
            
             <div className="mt-3 d-flex justify-content-center">
            <a href="/food/restraurent" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black' > Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="/food/restraurent" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="/food/restraurent" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
           
         </div>
             <div className="mt-3 d-flex justify-content-center">
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            

         </div> 
         <div className="mt-3 d-flex justify-content-center">
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
           
         </div>
         <div className="mt-3 d-flex justify-content-center">
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
          
         </div>
         <div className="mt-3 d-flex justify-content-center">
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
           
         </div> 
         <div className="mt-3 d-flex justify-content-center">
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
            <a href="" className='border border-success rounded pointer-event mx-2 text-decoration-none px-4 py-3 text-black'> Agra Restaurants <span><i class="fa-solid fa-angle-right"></i></span></a>
        
         </div>
             
      </div>
      </>
  )
}

export default Restrolist