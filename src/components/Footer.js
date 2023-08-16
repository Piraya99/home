import React from 'react';
import styles from'./Footer.module.css';

export default function Footer() {
	return (
		<div className={styles.footer}>
			<div>&copy; Piraya Sanpakij 2023</div>
			<nav><a href="#top">Back to Top &uarr;</a></nav>
		</div>
	);
};