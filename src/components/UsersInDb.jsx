import React,{useState, useEffect} from "react"
import UsersComponent from "./Users";

function GenresInDb() {

    const [Users,setUsers]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:3001/api/users")
        .then(res => res.json())
        .then(data => setUsers(data.users))
    },([]))

    return (
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-gray-800">
                            Users in Data Base
                        </h6>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            {Users.map((genre, index) => {
                                return <UsersComponent {...genre} key={index} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
    

}
export default GenresInDb;

