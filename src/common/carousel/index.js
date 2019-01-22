import React from 'react'

import './index.scss'

import {
	Carousel
} from 'antd';

import Carousel1 from 'statics/images/carousel_1.jpg'
import Carousel2 from 'statics/images/carousel_2.jpg'
import Carousel3 from 'statics/images/carousel_3.jpg'
import Carousel4 from 'statics/images/carousel_4.png'
import Carousel5 from 'statics/images/carousel_5.jpg'

class Carousels extends React.Component {
	render() {
		return (
			<Carousel 
				autoplay={true}
			>
	      <div>
	      	<img src={Carousel1} alt=""/>
	      </div>
	      <div>
	      	<img src={Carousel2} alt=""/>
	      </div>
	      <div>
	      	<img src={Carousel3} alt=""/>
	      </div>
	      <div>
	      	<img src={Carousel4} alt=""/>
	      </div>
	      <div>
	      	<img src={Carousel5} alt=""/>
	      </div>
	    </Carousel>
		)
	}
}

export default Carousels;