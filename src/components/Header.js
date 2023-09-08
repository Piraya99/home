import React from 'react';
import { Link } from "react-router-dom";
import styles from './Header.module.css';

import signature from '../img/signature.png';

export default function Header(props) {
	return (
        <header id="top">
    
			<Link to="/"><img className={styles.signature} src={signature} alt="signature" /></Link>
			<input className={styles.menuBtn} type="checkbox" id="menuBtn" />
			<label className={styles.menuIcon} for="menuBtn"><span className={styles.navicon}></span></label>
			<nav>
				<ul className={styles.menu}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/experience">{props.french ? 'Parcours' : 'Experiences'}</Link></li>
				<li><Link to="/projects">{props.french ? 'Projets' : 'Projects'}</Link></li>
				</ul>
			</nav>     
        
		</header>
	)
}