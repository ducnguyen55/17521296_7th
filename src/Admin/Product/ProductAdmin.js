import React from 'react';
import '../../Product/Product.css';
import {Link} from 'react-router-dom';
const 	to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
 
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
 
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
 
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
 
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
 
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
 
    // return
    return str;
	}
const ProductAdmin = ({id,name,image,discount,price}) => {
	if(discount==="true")
	{
		return (
			<div className='col-sm-3'>
				<Link to={"/product/" + `${id}` + "/" + to_slug(`${name}`) }>
					<img alt='imageproduct' src={`${image}`} id="image"/>
				</Link>
				<h3 className="productName">
					<a href="#">{name}</a>
				</h3>
				<div className="icon-Discount">
					<span>-50%</span>
				</div>
				<div className="priceDiscount">
					{price}.000
				</div>
				<div className="price">
					{price/2}00
				</div>
			</div>	
		);
	}
	else
	{
		return (
			<div className='col-sm-3'>
				<Link to={"/product/" + `${id}` + "/" + to_slug(`${name}`) }>
					<img alt='imageproduct' src={`${image}`} id="image"/>
				</Link>
				<h3 className="productName">
					<a href="#">{name}</a>
				</h3>
				<div className="price">
					{price},000
				</div>
			</div>	
		);
	}
}

export default ProductAdmin;