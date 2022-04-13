import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/app.css';
import {BrowserRouter} from "react-router-dom"
import ProjectRoutes from './components/ProjectRoutes'

ReactDOM.render(
  <BrowserRouter>
    <ProjectRoutes/>
  </BrowserRouter>,
  document.getElementById('root')
);


