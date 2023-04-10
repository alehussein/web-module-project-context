import React, {useContext} from 'react';

// Components
import Product from './Product';
import { ProductsContext } from '../Contexts/ProductsContext';

const Products = props => {
	const { products } = useContext(ProductsContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					// addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
