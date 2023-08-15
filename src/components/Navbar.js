import React from 'react';
import styles from './Navbar.module.css';

function Navbar(props) {
	return (
		<nav className={styles.nav}>
	        <ul>
	          <li><a href="#timeline">{props.french ? 'Parcours' : 'Experiences'}</a></li>
	          <li><a href="#portfolio">{props.french ? 'Projets' : 'Projects'}</a></li>
	        </ul>
        </nav>
	);
};

export default Navbar;