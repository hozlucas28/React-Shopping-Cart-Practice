// Importaciones React
import { Component } from 'react';

// Componentes
import Button from './Button';

const styles = {
	product: {
		width: '30%',
		padding: '10px 15px',
		border: 'solid 1px #eee',
		borderRadius: '15px',
		boxShadow: '0px 5px 5px rgb(0,0,0,0.1)'
	},

	img: {
		width: '100%'
	}
};

class Product extends Component {
	render() {
		const { product, addToCart } = this.props;

		return (
			<div style={styles.product}>
				<img
					src={product.image}
					alt={product.name}
					style={styles.img}
				/>
				<h3>{product.name}</h3>
				<p>{product.price}</p>
				<Button onClick={() => addToCart(product)}>Agregar al carro</Button>
			</div>
		);
	}
}

export default Product;
