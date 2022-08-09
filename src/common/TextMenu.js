import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TextMenu.css';


export default class TextMenu extends Component {
	render() {
		return (
			<ul>
				{this.props.menus.map((item) => (
					<TextMenuItem
						key={item.id}
						id={item.id}
						title={item.title}
						onItemClick={this.props.onItemClick}
						active={item.id === this.props.activeItemId}
					/>
				))}
			</ul>
		)
	}
}


class TextMenuItem extends Component {
	handleClick = () => {
		this.props.onItemClick(this.props.id);
	}

	render() {
		const style = this.props.active ? 'textmenu_item_active' : 'textmenu_item_deactive';
		return (
			<li className={style} onClick={this.handleClick}>
				{this.props.title}
			</li>
		);
	}
}


TextMenu.propTypes = {
	// + menus(array)
	//  - id(number)
	//  - title(string)
	menus: PropTypes.array.isRequired,
	onItemClick: PropTypes.func.isRequired,
	activeItemId: PropTypes.number.isRequired,
}


TextMenu.propTypes = {
	// + menus(array)
	//  - id(number)
	//  - title(string)
	menus: PropTypes.array.isRequired,
	onItemClick: PropTypes.func.isRequired,
	activeItemId: PropTypes.number.isRequired,
}
