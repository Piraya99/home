import React from 'react';
import styles from './Workpermit.module.css';

import workpermit from '../img/icon/workpermit.svg';

export default function Workpermit(props) {
	return (
		<div className={styles.workpermit}>
			<img src={workpermit} alt="workpermit"/>
			<p>{props.french ? 'Autorisation de travail avec titre de séjour vie privée et familiale en cours de validité' : 'Work permit in France and EU countries with residence card private and family life'}</p>
		</div>
	)
};