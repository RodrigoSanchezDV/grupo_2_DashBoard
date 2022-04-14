import React from "react" 
import {Routes, Route} from "react-router-dom";
import App from "./App.js"
import Template from "./Template"
import UsersInDb from "./UsersInDb"
import NewMovie from './NewMovie';
import ContentRowMovies from "./ContentRowMovies"
import UserDetailComp from "./UserDetail"
import ProductsComp from "./Products"
import ProductDetailComp from "./ProductDetail"


const UsersComp = () => {return (<Template> <UsersInDb/> </Template>)};
const NewMovieComp = () => {return (<Template> <NewMovie/> </Template>)};
const ContentRowMoviesComp = () => {return(<Template> <ContentRowMovies/> </Template>)};
const UserDetail = ()=>{return (<Template>  <UserDetailComp/> </Template>)};
const ListProducts = ()=>{return (<Template>  <ProductsComp/> </Template>)};
const ProducDetail = ()=>{return (<Template>  <ProductDetailComp/> </Template>)};

const ProjectRoutes = ()=>{
    return(
        <React.Fragment>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/users" element={<UsersComp/>}/>
                <Route path="/users/:id" element={<UserDetail/>}/>
                <Route path="/products" element={<ListProducts/>}/>
                <Route path="/products/:id" element={<ProducDetail/>}/>
                <Route path='/newmovie' element={<NewMovieComp/>}/>
                <Route path='/infoMovie' element={<ContentRowMoviesComp/>}/>
            </Routes>
        </React.Fragment>
    )
}

export default ProjectRoutes