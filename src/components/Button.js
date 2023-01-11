// Importaciones React
import { Component } from 'react';

const styles = {
	button: {
		padding: '15px 20px',
		color: '#fff',
		border: 'none',
		borderRadius: '5px',
		backgroundColor: '#0A283E',
		cursor: 'pointer'
	}
};

class Button extends Component {
	render() {
		return (
			<button
				{...this.props}
				style={styles.button}
			/>
		);
	}
}

export default Button;
