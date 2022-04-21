import React from "react" 
import {Routes, Route} from "react-router-dom";
import App from "./App.js"
import Template from "./Template"
import UsersInDb from "./UsersInDb"
import NewProduct from './LastProduct';
import ContentRowProducts from "./ContentRowProducts"
import UserDetail from "./UserDetail"
import Products from "./Products"
import ProductDetail from "./ProductDetail"
import CategoriesData from "./CategoriesData"

const ProjectRoutes = ()=>{
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<Template/>}>
                    <Route path="/" element={<App/>}/>
                    <Route path="/users" element={<UsersInDb/>}/>
                    <Route path="/users/:id" element={<UserDetail/>}/>
                    <Route path="/products" element={<Products/>}/>
                    <Route path="/products/:id" element={<ProductDetail/>}/>
                    <Route path='/lastproduct' element={<NewProduct/>}/>
                    <Route path='/allcategories' element={<CategoriesData/>}/>
                    <Route path='/data' element={<ContentRowProducts/>}/>
                </Route>
            </Routes>
        </React.Fragment>
    )
};

export default ProjectRoutes