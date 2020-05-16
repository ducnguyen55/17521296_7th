import React from 'react';
import Product from './Product';

const ListProduct = ({product}) => {
	return (
		  <div className="row">
		  {
		  	product.map((good,i)=> {
			  		return(
			  		 	<Product
			  		 		key={i} 
			  		 		id={good.id}
			  		 		name={good.name} 
			  		 		image={good.image}
			  		 		price={good.price}
			  		 		discount={good.discount}
			  		 		/>	
			  		);
		  		})
		  }
		  </div>
	);
}


export default ListProduct;