import React from "react"
let ListMovies = ({dataMovie})=>{
    return(
        <tr>
            <td>{dataMovie.id}</td>
            <td>{dataMovie.title}</td>
            <td>{dataMovie.rating}</td>
            <td>{dataMovie.awards}</td>
            <td>{dataMovie.length}</td>
        </tr>
    )
}
export default ListMovies