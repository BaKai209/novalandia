import React from 'react';
import {hotelsData} from '../../Data/hotelsData';
import './Hotels.css';
import RightArrow from '../../assets/rightArrow.png';

const Hotels = () => {
	return (
		<div className='Hotels' id='hotels'>
			{/* encabezado */}
			<div className='Hotels-header'>
				<span className='stroke-text'>Descubre</span>
				<span>nuestros destinos</span>
				<span className='stroke-text'> para ti</span>
			</div>

			<div className='hotels-categories'>
				{hotelsData.map((hotels) => (
					<div className='category'>
						{hotels.image}
						<span>{hotels.heading}</span>
						<span>{hotels.details}</span>
                  <div className="ingresa-ahora"><span>Ingresa Ahora</span><img src={RightArrow} alt='' /></div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Hotels;
