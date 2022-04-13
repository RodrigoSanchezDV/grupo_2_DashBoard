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


/* 
dataMovies =[
0:{
awards: 3
created_at: null
genre: {id: 5, name: 'Ciencia Ficcion', ranking: 5, active: true, created_at: '2010-07-04T03:00:00.000Z', …}
genre_id: 5
id: 1
length: 120
rating: "7.9"
release_date: "2010-10-04T00:00:00.000Z"
title: "Avatar"
}
1:{
awards: 11
created_at: null
genre: {id: 3, name: 'Drama', ranking: 3, active: true, created_at: '2013-07-04T03:00:00.000Z', …}
genre_id: 3
id: 2
length: 320
rating: "7.7"
release_date: "1997-09-04T00:00:00.000Z"
title: "Titanic"
}
2:{
awards: 7
created_at: null
genre: {id: 5, name: 'Ciencia Ficcion', ranking: 5, active: true, created_at: '2010-07-04T03:00:00.000Z', …}
genre_id: 5
id: 3
length: null
rating: "9.1"
release_date: "2004-07-04T00:00:00.000Z"
title: "La Guerra de las galaxias: Episodio VI"
}
]

*/
