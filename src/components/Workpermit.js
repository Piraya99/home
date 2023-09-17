import React from 'react';
import styles from './Workpermit.module.css';

import flagFr from '../img/icon/flag-fr.svg';
import flagEu from '../img/icon/flag-eu.svg';
import authorized from '../img/icon/authorized.svg';

export default function Workpermit(props) {
	return (
		<div className={styles.workpermit}>
			<div className={styles.workpermitIcons}>
				<img src={flagFr} alt="flagFr"/>
				<img src={flagEu} alt="flagEu"/>
			</div>
			<img src={authorized} alt="authorized"/>
			<p>{props.french ? 'Autorisation de travail avec titre de séjour vie privée et familiale en cours de validité' : 'Work permit in France and EU countries with residence card private and family life'}</p>
		</div>
	)
};