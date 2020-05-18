import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';
const format_currency = (price) => {
	return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}
const Product = ({id,name,url,discount,price,admin}) => {
	if(discount==="true")
	{
		return (
			<div className='col-sm-3'>
				<a href="#">
					<img alt='imageproduct' src={`${url}`} id="image"/>
				</a>
				<h3 className="productName">
					<a href="#">{name}</a>
				</h3>
				<div className="icon-Discount">
					<span>-50%</span>
				</div>
				<div className="priceDiscount">
					{format_currency(price)}
				</div>
				<div className="price">
					{format_currency(price/2)}
				</div>
			</div>	
		);
	}
	else
	{
		return (
			<div className='col-sm-3'>
				<a href="#">
					<img alt='imageproduct' src={`${url}`} id="image"/>
				</a>
				<h3 className="productName">
					<a href="#">{name}</a>
				</h3>
				<div className="price">
					{format_currency(price)}
				</div>
			</div>	
		);
	}
}

export default Product;