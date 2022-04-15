import AllCategories from "./AllCategories"
import React,{useState, useEffect} from "react";

function CategoiesData() {
    const [Categories,setCategories]=useState();
    
    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data => setCategories(data.countByCategory))
    },([]))

    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">
                            Products per category
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            { Categories !== undefined?
                            Categories.map((oneCategory, index) => {
                                return <AllCategories name={oneCategory.name} quantity={oneCategory.product.length} key={index} img={oneCategory.image}/>;
                            }):<p>Loading...</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    

}
export default CategoiesData;