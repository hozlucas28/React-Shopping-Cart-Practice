// Importaciones React
import { Component } from 'react';

// Componentes
import BubbleAlert from './BubbleAlert';
import CartDetails from './CartDetails';

const styles = {
	cart: {
		padding: '15px',
		color: '#fff',
		border: 'none',
		borderRadius: '15px',
		backgroundColor: '#359A2C',
		cursor: 'pointer'
	},

	bubble: {
		position: 'relative',
		left: 12,
		top: '20px'
	}
};

class Cart extends Component {
	render() {
		const { cart, showCart, isCartVisible } = this.props;
		const amount = cart.reduce((acum, e) => acum + e.amount, 0);

		return (
			<div>
				<span style={styles.bubble}>
					{amount !== 0 ? <BubbleAlert amount={amount} /> : null}
				</span>
				<button
					style={styles.cart}
					onClick={showCart}
				>
					Carro
				</button>
				{isCartVisible ? <CartDetails cart={cart} /> : null}
			</div>
		);
	}
}

export default Cart;
