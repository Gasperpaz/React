import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const Menu = () => {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
     <div className="container-fluid">
              
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
     </button>
  <a className="navbar-brand" href="#">JEA Traslasierra</a>
  <div className="collapse navbar-collapse" id="navbarNav">
   <ul className="navbar-nav">
     <li className="nav-item">
     <a className="nav-link active" aria-current="page" href="#">Inicio</a>
     </li>
   <li className="nav-item">
    <a className="nav-link" href="#">Nosotros</a>
      </li>
   <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Células
   </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
   <li><a className="dropdown-item" href="#">Hombres</a></li>
    <li><a className="dropdown-item" href="#">Mujeres</a></li>
    <li><a className="dropdown-item" href="#">Adolescentes</a></li>
<li><a className="dropdown-item" href="#">Matrimonios</a></li>
<li><a className="dropdown-item" href="#">Niños</a></li>
  </ul>
   </li>
  <li className="nav-item">
 <a className="nav-link" href="#">Contacto</a>
   </li>
     </ul>
   </div>
     </div>
        </nav>
    </>
  )
}

export default Menu