// Importaciones React
import { Component } from 'react';

// Componentes
import Logo from './Logo';
import Cart from './Cart';

const styles = {
	navbar: {
		position: 'relative',
		padding: '0px 50px',
		height: '100px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		boxShadow: '0px 2px 3px rgb(0,0,0,0.1)'
	}
};

class Navbar extends Component {
	render() {
		const { cart, showCart, isCartVisible } = this.props;

		return (
			<nav style={styles.navbar}>
				<Logo />
				<Cart
					cart={cart}
					showCart={showCart}
					isCartVisible={isCartVisible}
				/>
			</nav>
		);
	}
}

export default Navbar;
