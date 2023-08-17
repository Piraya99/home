import React from 'react';
import styles from'./Footer.module.css';

export default function Footer(props) {
	return (
		<div className={styles.footer}>
			<div>&copy; Piraya Sanpakij 2023</div>
			<nav><a href="#top">{props.french ? 'Haut de Page' : 'Back to Top'} &uarr;</a></nav>
		</div>
	);
};