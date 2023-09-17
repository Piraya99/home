import React, { useEffect } from 'react';
import styles from'./Footer.module.css';

export default function Footer(props) {
	useEffect(() => {
    	window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  	}, []);
	return (
		<div className={styles.footer}>
			<p>&copy; Piraya Sanpakij 2023</p>
			<nav onClick={useEffect}>
				<a href="">{props.french ? 'Haut de Page' : 'Back to Top'} &uarr;</a>
			</nav>
		</div>
	);
};