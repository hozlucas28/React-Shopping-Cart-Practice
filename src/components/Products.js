// Importaciones React
import { Component } from 'react';

// Componentes
import Product from './Product';

const styles = {
	products: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
};

class Products extends Component {
	render() {
		const { products, addToCart } = this.props;

		return (
			<div style={styles.products}>
				{products.map(product => (
					<Product
						product={product}
						addToCart={addToCart}
						key={product.name}
					/>
				))}
			</div>
		);
	}
}

export default Products;
