import React,{useState, useEffect} from "react"
import MovieList from './TemplateProductsList';
import ListProducts from "./ListProducts"

function Movie(){
	const [AllProducts,setAllProducts]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => setAllProducts(data.Products))
    },([]))


	return(
		<React.Fragment>
			<MovieList>
				{
				AllProducts.map(oneDataMovie => {
					return(
						<ListProducts dataMovie={oneDataMovie} key={oneDataMovie.id}/>
					)})
				}
			</MovieList>
        </React.Fragment>
	)
}

export default Movie;