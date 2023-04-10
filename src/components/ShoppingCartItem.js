import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Contexts/CartContext';

const Item = props => {
	const {removeItem} = useContext(CartContext);

	const handleRemove = () => {
		removeItem(props.id);
	}

	return (
		<div className="shopping-cart_item">
			<img src={props.image} alt={`${props.title} book`} />


			<div>
				<h1>{props.title}</h1>
				<p>$ {props.price}</p>
				<button onClick={handleRemove}>Remove from cart</button>
			</div>
		</div>
	);
};

export default Item;