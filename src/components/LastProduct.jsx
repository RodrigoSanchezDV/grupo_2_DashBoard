import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";

function NewMovie () {

    const [LastProduct,setLastProduct]=useState();
    
    useEffect(()=>{
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => setLastProduct(data.Products[data.Products.length - 1]))
    },([]))

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    {LastProduct && LastProduct.id !== undefined? <Link to={`/products/${LastProduct.id}`} className="m-0 font-weight-bold text-gray-800">Last product added</Link>:""}
                </div>
                <div className="card-body">
                    <div className="text-center">
                    {LastProduct && LastProduct.image1 !== undefined? <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={`http://localhost:3000/uploads/products/${LastProduct.image1}`} alt=" Star Wars - Mandalorian " /> : "Loading"}    
                    </div>
                    <p>{LastProduct && LastProduct.description !== undefined? LastProduct.description : "Loading"}</p>
                    <p>{LastProduct && LastProduct.name !== undefined?LastProduct.name:""}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default NewMovie;