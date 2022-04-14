import React from "react";
import { Link } from "react-router-dom";
let MovieList = (props)=>{
    return(
        <React.Fragment>
			<Link to="/products" className="h3 mb-2 text-gray-800">Products in Data Base</Link>				
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
							<thead>
								<tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Desripcion</th>
                                    <th>Categoria</th>
                                    <th>Detalles</th>
								</tr>
							</thead>
							<tfoot>
								<tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Desripcion</th>
                                    <th>Categoria</th>
                                    <th>Detalles</th>
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