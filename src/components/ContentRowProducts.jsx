import React,{useState, useEffect} from "react"
import SmallCard from './SmallCard';


function ContentRowTop(){
    
    const [TotalUsers,setTotalUsers]=useState([]);
    const [TotalProducts,setTotalProducts]=useState([]);
    const [TotalCategories, setTotalCategories]=useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/api/users")
        .then(res => res.json())
        .then(data => setTotalUsers(data.count))
    },([]))
    useEffect(()=>{
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data => {setTotalProducts(data.count);setTotalCategories(data.countByCategory.length)})
    },([]))

    let cardProps = [
        {
            title: "All registered users",
            count: TotalUsers,
            icon: "fas fas fa-user fa-2x",
            url: "/users"
        },
        {    
            title: "All products",
            count: TotalProducts,
            icon: "fas fas fa-truck fa-2x",
            url: "/products"
        },
        {
            title: "All categories",
            count: TotalCategories,
            icon: "fas fas fa-car fa-2x",
            url: "/allcategories"
        }
    ];


    return (
        <React.Fragment>
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key={index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowTop;