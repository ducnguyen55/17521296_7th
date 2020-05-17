import React, {Component} from 'react'
import './Detail.css'

class Detail extends Component {
	constructor(){
		super();
		this.state={
			products:[]
		};
	}
	async componentDidMount() {
		await fetch(`http://localhost:5000/product/get-data`)
		.then(response => response.json())
		.then(data => this.setState({products:data}));
	};
	render() {
		var pid = parseInt(this.props.match.params.id);
		const {products} = this.state;
		return(
			<div className="container detail">
				<h1 className="detailTitle"> SẢN PHẨM </h1>
				{
					products.map((product,key) => {
						if(product.id===pid) {
							return(
								<div className="col-sm-12 productDetail">
									<div className="product-info">
										<div className="col-sm-6">
											<img alt='imageproduct' src={`${product.url}`} id="image"/>
										</div>
										<div className="col-sm-6 infoproduct">
											<form onSubmit={this.onSubmit}>
												<div>
													<label>ID :</label>
													<input type="text" id="id" onChange={this.changeHandler} value={product.id} />
												</div>
												<div>
													<label>Type :</label>
													<input type="text" onChange={this.changeHandler} value={product.type}/>
												</div>
												<div>
													<label for="">Name :</label>
													<input type="text" id="name" onChange={this.changeHandler} placeholder="Nhập tên sản phẩm" defaultValue={product.name} />
												</div>
												<div>
													<label for="">URL :</label>
													<input type="text" id="url" onChange={this.changeHandler} placeholder="Nhập đường dẫn" defaultValue={product.url} />
												</div>
												<div>
													<label for="">Price :</label>
													<input type="text" id="price" onChange={this.changeHandler} placeholder="Nhập giá" defaultValue={`${product.price}`+',000'} />
												</div>
												<button type="submit" className="btn btn-primary btn-block">Save</button>
											</form>
										</div>
									</div> 
								</div>
								);
							}
						}
					)
				}
				<button type="submit" className="delete btn btn-primary btn-block">Delete</button>
			</div>
		)
	}
}

export default Detail;