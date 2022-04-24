import React from "react";
function AllCategories(props){

    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        <p>{props.name}</p>
                        <p>Quantity: {props.quantity}</p>
                    </div>
                        <img src={`http://localhost:3000/uploads/products/${props.img}`}alt="" />                  
                </div>
            </div>
        </React.Fragment>
    )
}
export default AllCategories;