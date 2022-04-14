import React from "react";
import { Link } from "react-router-dom";
let ListMovies = ({dataMovie})=>{
    return(
        <tr>
            <td>{dataMovie.id}</td>
            <td>{dataMovie.name}</td>
            <td>{dataMovie.description}</td>
            <td>{dataMovie.category.name}</td>
            <td>{dataMovie.length}</td>
            <td><Link to={`/products/${dataMovie.id}`}>Details</Link></td>
        </tr>
    )
}
export default ListMovies