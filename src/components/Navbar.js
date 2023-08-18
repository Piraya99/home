import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar(props) {
	return (
		<nav className={styles.navbar}>
	        <ul>
	          <li><a href="#experience">{props.french ? 'Parcours' : 'Experiences'}</a></li>
	          <li><a href="#projects">{props.french ? 'Projets' : 'Projects'}</a></li>
	        </ul>
        </nav>
	);
};