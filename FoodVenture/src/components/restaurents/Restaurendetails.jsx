import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Resdetails() {
    const { rid } = useParams();
    const [resinfo, setresInfo] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/restaurents/${rid}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch product");
                }
                return res.json();
            })
            .then((resp) => {
                setresInfo(resp);
            })
            .catch((err) => {
                console.log(err.message);
                setresInfo({ error: true });
            });
    }, [rid]);

    return (
        <>
            <div className=" container">
            <div>
                {resinfo && !resinfo.error && (
                    
                    <div className=" align-content-center">
                        <div className=" ">
                        <h3>Restaurant details</h3>
                        <h2>
                            Restaurent Name {resinfo.resname} ({resinfo.rid})
                        </h2>
                        <img src={resinfo.image} alt={resinfo.resname}  style={{width:"30%" ,height:"50%"}}/>
                        <h5>Price: {resinfo.rating}</h5>
                     
                        <h5>Description: {resinfo.discription}</h5>
                        <Link className="btn btn-success" to="/food/restrohome">
                            Back To Listing
                        </Link>

                    </div>
                    </div>
                )}
                {resinfo && resinfo.error && (
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

export default Resdetails;
