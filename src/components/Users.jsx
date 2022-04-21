import React from 'react';
import { Link } from "react-router-dom"
function Genre(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                    <p>{props.name}</p>
                        <p> {props.email}</p>
                        <Link to={`/users/${props.id}`}>Details</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Genre;