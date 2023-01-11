// Importaciones React
import { Component } from 'react';

const styles = {
	cartDetails: {
		position: 'absolute',
		right: 50,
		marginTop: 30,
		width: '300px',
		borderRadius: '5px',
		backgroundColor: '#fff',
		boxShadow: '1px 5px 5px rgb(0,0,0,0.3)'
	},

	ul: {
		margin: '0px',
		padding: '0px'
	},

	li: {
		padding: '25px 20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		borderBottom: 'solid 1px #aaa',
		listStyleType: 'none'
	}
};

class CartDetails extends Component {
	render() {
		const { cart } = this.props;

		return (
			<div style={styles.cartDetails}>
				<ul style={styles.ul}>
					{cart.map(x => (
						<li
							key={x.name}
							style={styles.li}
						>
							<img
								src={x.image}
								alt="{x.name}"
								width="50"
								height="32"
							/>
							{x.name}
							<span>{x.amount}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default CartDetails;
