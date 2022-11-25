import React from 'react';
import './vuelos.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png';

const Vuelos = () => {
	return (
		<div className='vuelos' id='vuelos'>
			<div className='izquierdo-v'>
				<img src={image1} alt='' />
				<img src={image2} alt='' />
				<img src={image3} alt='' />
				<img src={image4} alt='' />
			</div>
			<div className='derecho-v'>
				<span>some reasons</span>

				<div>
					<span className='stroke-text'>why</span>
					<span> Choose Us?</span>
				</div>

				<div className='detalles-d'>
					<div>
						<img src={tick} alt='' />
						<span>
							Conoze las mas increibles
							ofertas en el mercado,
							diferentes medios de pago.
						</span>
					</div>
					<div>
						<img src={tick} alt='' />
						<span>
							Contamos con expertos
							altamente cualificados, que te
							ayudaran a encontra el viaje
							de tus sueños.
						</span>
					</div>
					<div>
						<img src={tick} alt='' />
						<span>
							Creamos las mejores alianzas
							estrategicas con los mejores
							proveedores para ofrecer
							siempre la mas alta calidad.
						</span>
					</div>
					<div>
						<img src={tick} alt='' />
						<span>
							dialogo para mostrar porque
							elegirnos.
						</span>
					</div>
				</div>
				<span style={{color: 'var(--gray)', fontWeight: 'normal'}}>
					OUR PARTNERS
				</span>

				<div className='partners'>
					<img src={nb} alt='' />
					<img src={adidas} alt='' />
					<img src={nike} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Vuelos;
