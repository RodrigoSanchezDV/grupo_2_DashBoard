import React from "react"
let MovieList = (props)=>{
    return(
        <React.Fragment>
			<h1 className="h3 mb-2 text-gray-800">All the movies in the Database</h1>				
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
                                    <th>Id</th>
                                    <th>Titulo</th>
                                    <th>Calificación</th>
                                    <th>Premios</th>
                                    <th>Duración</th>
								</tr>
							</tfoot>
							<tbody>
                            {props.children}
							</tbody>
						</table>
					</div>
				</div>
			</div>
        </React.Fragment>
)}
export default MovieList