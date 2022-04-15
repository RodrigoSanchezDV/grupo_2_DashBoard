import React,{useState, useEffect, useRef} from "react"
import { useParams } from "react-router-dom"

function Movie(){
    const colorProduct = useRef();
    
	const {id} = useParams();
    const [ProductDetail,setProductDetail]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3001/api/products/${id}`)
        .then(res => res.json())
        .then(data => 
            setProductDetail(data.productData))
        },([]));
        let a = ProductDetail.color && ProductDetail.color[0].name? ProductDetail.color[0].name:"red"
        const changeColor=()=>{
            colorProduct.current.style.color= "#"+ a
        }

    return(
		<React.Fragment >
            {   
                ProductDetail.category && ProductDetail.category.name?
                <h2 onMouseOver={changeColor}>{ProductDetail.category.name}</h2>: <p>Loading...</p>
            }
            <h1 >{ProductDetail.name} </h1>
            <p >{ProductDetail.description}</p> 
            <img src={ProductDetail.image1}/>
            <p >{ProductDetail.price}</p>
            {   
                ProductDetail.size && ProductDetail.size[0].name?
                <p >{ProductDetail.size[0].name}</p>: <p>Loading...</p>
            }
            {   
                ProductDetail.color && ProductDetail.color[0].name?
                <p ref={colorProduct} onMouseOver={changeColor} className="fas fas fa-circle fa-2x"></p>: <p>Loading...</p>
            }
            
        </React.Fragment> 
	)
}

export default Movie;