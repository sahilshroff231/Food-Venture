import React from 'react'



function ProductReducer(state,action) {
    switch (action.type){
    case "SET_LOADING":
    return{
        ...state,
        isLoading:true  ,
        isError:false,
    };
    case "MY_API_DATA":
        return{
            ...state,
            isLoading:false,
            productdata:action.payload,
        }


    case "API_ERROR":
        return{
            ...state,
            isLoading:false  ,
            isError:true,
        };
    default:
        return state;
        

}
  
}

export default ProductReducer;