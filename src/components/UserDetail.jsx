import React,{useState, useEffect} from "react"
import { useParams } from "react-router-dom"
function UserDetail() {

    const {id} = useParams();
    const [Users,setUsers]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3001/api/users/${id}`)
        .then(res => res.json())
        .then(data => setUsers(data.userData))
    },([]))
    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">
                            Users detail
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <p>{Users.name}</p>
                            
                        </div>
                        <p>{Users.email}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    

}
export default UserDetail;