import React from 'react';
import image from '../assets/images/logo_blanco.svg';
import { Link, Route, Switch } from "react-router-dom";

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Habito"/>
                    </div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Habito</span>
                    </a>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">Actions</div>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Users">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>tabla de Usuarios</span>
                    </a>
                </li>
                <li className="nav-item" >
                    <a className="nav-link" href="/Products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla de productos</span>
                    </a>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    )
}
export default SideBar;