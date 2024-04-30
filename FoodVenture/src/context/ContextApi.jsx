import { createContext, useContext, useEffect, useReducer } from "react";
import ProductReducer from '../reducer/ProductReducer'

const AppContext = createContext();

const useProductcontext = () => {
    return useContext(AppContext);
}

const initialState = {
    isLoading: false,
    isError: false,
    productdata: [],
    // featureProducts: []
}

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect(() => {
      const storedUserData = JSON.parse(localStorage.getItem('userdata'));
      console.log(storedUserData)
        const userId = storedUserData ? storedUserData.id : null;
      fetch("http://localhost:3000/product")
    .then((res) => {
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((resp) => {
        // Handle successful response
        console.log(resp);
        const productdata = resp.map(product=> ({
          ...product,
          userId:userId

        }));
        dispatch({ type: "MY_API_DATA", payload: productdata });
    })
    .catch((error) => {
        // Handle fetch error
        console.error('Error fetching data:', error);
        dispatch({ type: "API_ERROR" });
    });

    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppProvider, AppContext,  useProductcontext};
