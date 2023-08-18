import React from 'react';
import { Link } from "react-router-dom"; 

import styles from './Navbar.module.css';



export default function Navbar(props) {
	return (
		<nav className={styles.navbar}>
	        <ul>
	        	<li><Link to="/">Home</Link></li>
	          	<li><a href="#experience">{props.french ? 'Parcours' : 'Experiences'}</a></li>
	          	<li><a href="#projects">{props.french ? 'Projets' : 'Projects'}</a></li>
	          	<li><Link to="/projectpage">{props.french ? 'Portfolio' : 'Portfolio'}</Link></li>
	        </ul>
        </nav>
	);
};