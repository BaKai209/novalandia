import React from 'react'
import './Header.css'
import logo from "../../assets/logo.png"
const Header = () => {
  return (
		<div className='header'>
			<img src={logo} alt='logo' className='logo' />

			<ul className='header-menu'>
				<li>Inicio</li>
				<li>Hoteles</li>
				<li>Planes</li>
				<li>Contacto</li>
				<li>Nosotros</li>
			</ul>
		</div>
  );
}

export default Header