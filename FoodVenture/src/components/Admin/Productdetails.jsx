import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Productdetails() {
    const { pdid } = useParams();
    const [productinfo, setProductInfo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/product/${pdid}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch product");
                }
                return res.json();
            })
            .then((resp) => {
                setProductInfo(resp);
            })
            .catch((err) => {
                console.log(err.message);
                setProductInfo({ error: true });
            });
    }, [pdid]);

    return (
        <> 
         <div className=" container">
            <div>
                {productinfo && !productinfo.error && (
                    <div>
                        <h3>Product details</h3>
                        <h2>
                            DishName {productinfo.dishname} ({productinfo.pdid})
                        </h2>
                        <img src={productinfo.image} alt={productinfo.dishname}  style={{width:"30%" ,height:"50%"}} />
                        <h5>Price: {productinfo.price}</h5>
                        <h5>Amount: {productinfo.amount}</h5>
                        <h5>Description: {productinfo.description}</h5>
                        <Link className="btn btn-success" to="/">
                            Back To Listing
                        </Link>
                    </div>
                )}
                {productinfo && productinfo.error && (
                    <div>
                        <h3>Product not found</h3>
                        <Link className="btn btn-success" to="/food/adminhome">
                            Back To Listing
                        </Link>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default Productdetails;
