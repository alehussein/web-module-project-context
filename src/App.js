import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

import { ProductsContext } from './Contexts/ProductsContext';
import { CartContext } from './Contexts/CartContext';



function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item]);
	};

	const removeItem = itemId => {
		setCart(cart.filter(item => item.id !== itemId));
	};

	

	return (
		<div className="App">
			<CartContext.Provider value={{cart, removeItem}}>
			<Navigation cart={cart} />

			{/* Routes */}
			<ProductsContext.Provider value={{products, addItem}}>
			<Route exact path="/">
				<Products/>
			</Route>
			</ProductsContext.Provider>

			<Route path="/cart">
				<ShoppingCart cart={cart}/>
			</Route>
			</CartContext.Provider>
		</div>
	);
}

export default App;
