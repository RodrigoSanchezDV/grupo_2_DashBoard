import React from 'react';
import image from '../assets/images/logo_blanco.svg';
import {Link} from "react-router-dom";

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Habito"/>
                    </div>
                </Link>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Habito</span>
                    </Link>
                </li>
                <hr className="sidebar-divider"/>
                <div className="sidebar-heading">Actions</div>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/data">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Details</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Users">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>All users</span>
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link className="nav-link" to="/Products">
                        <i className="fas fa-fw fa-table"></i>
                        <span>All products</span>
                    </Link>
                </li>
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
        </React.Fragment>
    )
}
export default SideBar;