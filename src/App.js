// Importaciones React
import { Component } from 'react';

// Componentes
import Products from './components/Products';
import Layout from './components/Layout';
import Title from './components/Title';
import Navbar from './components/Navbar';

class App extends Component {
	state = {
		cart: [
			// {
			// 	name: 'Tomate',
			// 	price: 1500,
			// 	image: './products/tomatoes.jpg',
			// 	amount: 1
			// }
		],

		products: [
			{
				name: 'Tomate',
				price: 1500,
				image: './products/tomatoes.jpg'
			},
			{
				name: 'Arvejas',
				price: 2500,
				image: './products/vetch.jpg'
			},
			{
				name: 'Lechuga',
				price: 500,
				image: './products/lettuce.jpg'
			}
		],

		isCartVisible: false
	};

	// Añadir productos al carrito
	addToCart = (product) => {
		const { cart } = this.state;

		if (cart.find((x) => x.name === product.name)) {
			const newCart = cart.map((x) => (x.name === product.name ? { ...x, amount: x.amount + 1 } : x));
			return this.setState({ cart: newCart });
		}

		return this.setState({
			cart: this.state.cart.concat({
				...product,
				amount: 1
			})
		});
	};

	// Mostrar carrito
	showCart = () => {
		if (!this.state.cart.length) {
			return;
		}

		this.setState({ isCartVisible: !this.state.isCartVisible });
	};

	render() {
		return (
			<div>
				<Navbar
					cart={this.state.cart}
					showCart={this.showCart}
					isCartVisible={this.state.isCartVisible}
				/>
				<Layout>
					<Title>Tienda</Title>
					<Products
						addToCart={this.addToCart}
						products={this.state.products}
					/>
				</Layout>
			</div>
		);
	}
}

export default App;
