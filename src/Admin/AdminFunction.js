import axios from 'axios'

export const addProduct = newProduct => {
	return axios
		.post('http://localhost:5000/product/insert',{
			id: newProduct.id,
			type: newProduct.type,
			name: newProduct.name,
			url: newProduct.url,
			price: newProduct.price,
			token: localStorage.usertoken	
		})
		.then(res => {
			console.log('Add product success!')
		})
}

export const updateProduct = Product => {
	return axios
		.patch('http://localhost:5000/product/update',{
			id: Product.id,
			type: Product.type,
			name: Product.name,
			url: Product.url,
			price: Product.price,
			token: localStorage.usertoken
		})
		.then(res => {
			console.log('Update product success!')
		})
}

export const deleteProduct = Product => {
	return axios
		.delete(`http://localhost:5000/product/${Product.id}`,{
			token: localStorage.usertoken
			})
		.then(res => {
			console.log('Deleted product!')
		})
}
