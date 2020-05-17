import axios from 'axios'

export const addProduct = newProduct => {
	return axios
		.post('http://localhost:5000/product/insert',{
			id: newProduct.id,
			type: newProduct.type,
			name: newProduct.name,
			url: newProduct.url,
			price: newProduct.price			
		})
		.then(res => {
			console.log('Add product success!')
		})
}
