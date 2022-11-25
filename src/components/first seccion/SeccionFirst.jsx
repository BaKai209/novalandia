import React from 'react';
import Header from '../header/Header';
import './SeccionFirst.css';
import avion from '../../assets/avion.png';
import imagenP from '../../assets/header.png';
import imagenB from '../../assets/Header_image_back.png';

const SeccionFirst = () => {
	return (
		<div className='hero'>
			<div className='left-h'>
				<Header />
				{/*trancicion del header */}
				<div className='the-best-ad'>
					<div></div>
					<span>dialogo para la transicion de imagen</span>
				</div>

				{/*encabezado foto */}
				<div className='seccion-text'>
					<div>
						<span className='stroke-text'>
							disfruta
						</span>
						<span>de tus vacaciones</span>
					</div>
					<div>
						<span>soñadas</span>
					</div>
					<div>
						<span>
							Viajes al mejor precio y con
							la mejor calidad del mercado.
							en NovaLandia contactamos con los mejores
							proveedores para ofrecer
							siempre la mejor calidad.
							Encuentra las mejores ofertas
							con los destinos mas increíbles
							a nivel mundial, y presume de
							unas vacaciones de lujo.
							<br />
							<br />
							EXPERTOS altamente calificados,
							que te ayudarán a
							encontrar el viaje de tu
							sueños.
						</span>
					</div>
				</div>

				{/*base de datos planes */}
				<div className='figures'>
					<div>
						<span>+1.800.000</span>
						<span>Hoteles</span>
					</div>
					<div>
						<span>+1.000</span>
						<span>Destinos Turisticos</span>
					</div>
					<div>
						<span>+500</span>
						<span>Planes Turisticos</span>
					</div>
				</div>

				{/** botones seccion*/}
				<div className='seccion-button'>
					<button className='btn'>Promociones</button>
					<button className='btn'>Vuelos</button>
				</div>
			</div>
			<div className='right-h'>
				<button className='btn'>Conoce Mas</button>

				<div className='vuelos-rate'>
					<img src={avion} alt='' />
					<span>vuelos hoy</span>
					<span>116</span>
				</div>
				{/** seccion de imagenes header*/}
				<img src={imagenP} alt='' className='imagen_principal' />
				<img src={imagenB} alt='' className='imagen_back' />

				{/** seccion para agregar contenido*/}
			</div>
		</div>
	);
};

export default SeccionFirst;
