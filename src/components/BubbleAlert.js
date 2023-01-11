// Importaciones React
import { Component } from 'react';

const styles = {
	bubbleAlert: {
		padding: '2px 10px',
		width: '20px',
		color: '#fff',
		fontSize: '0.9rem',
		borderRadius: '15px',
		backgroundColor: '#E9725A'
	}
};

class BubbleAlert extends Component {
	// Número de productos
	getNumber(number) {
		if (!number) {
			return '';
		}

		return number > 9 ? '9+' : number;
	}

	render() {
		const { amount } = this.props;

		return <span style={styles.bubbleAlert}>{this.getNumber(amount)}</span>;
	}
}

export default BubbleAlert;
