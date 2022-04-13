import React from "react"
import MovieList from './MovieList';
import ListMovies from "./ListMovies"

function Movie(){
    let dataMovies =[
        {
            id: 1,
            title: "Titanic",
            rating: 9,
            awards: 10,
            length: 320,
        }
    ]
	return(
		<React.Fragment>
			<MovieList>
				{
				dataMovies.map(oneDataMovie => {
					return(
						<ListMovies dataMovie={oneDataMovie} key={oneDataMovie.id}/>
					)})
				}
			</MovieList>
        </React.Fragment>
	)
}

export default Movie;