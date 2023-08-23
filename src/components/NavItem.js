import React from 'react';
import { Link } from "react-router-dom"; 

export default function NavItem(props) {
	return (
		<nav className="navbar">
	        <ul>
	        	<li><Link to="/">Home</Link></li>
	          	<li><Link to="/experience">{props.french ? 'Parcours' : 'Experiences'}</Link></li>
	          	<li><Link to="/projects">{props.french ? 'Projets' : 'Projects'}</Link></li>
	        </ul>
        </nav>
	);
};