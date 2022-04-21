import React,{useState, useEffect, useRef} from "react"
import { useParams } from "react-router-dom"

function Movie(){
    const colorProduct = useRef();
    
	const {id} = useParams();
    const [ProductDetail,setProductDetail]=useState([])
    
    useEffect(()=>{
        fetch(`http://localhost:3001/api/products/${id}`)
        .then(res => res.json())
        .then(data => setProductDetail(data.productData))
    },([]));

        let a = ProductDetail.color && ProductDetail.color[0]? ProductDetail.color[0].name:"red"
        const changeColor=()=>{
            colorProduct.current.style.color= a
        }

    return(
		<React.Fragment >
            {   
                ProductDetail.category && ProductDetail.category.name?  <h2>{ProductDetail.category.name}</h2>: "Product not found"
            }

            {
                ProductDetail.name?<h1 >{ProductDetail.name} </h1>:""
            }

            {
                ProductDetail.description?<p >{ProductDetail.description}</p> :""
            }

            {
                ProductDetail.image1?<img src={ProductDetail.image1}/>:""
            }

            {
                ProductDetail.price?<p >{ProductDetail.price}</p>:""
            }
            
            {   
                ProductDetail.size && ProductDetail.size[0] && Error !== "Product not found"?
                <p >{ProductDetail.size[0].name}</p>: ""
            }
            {   
                ProductDetail.color && ProductDetail.color[0] && Error !== "Product not found"?
                <p ref={colorProduct} onMouseOver={changeColor} className="fas fas fa-circle fa-2x"></p>: ""
            }
            
        </React.Fragment> 
	)
}

export default Movie;