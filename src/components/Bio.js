import React from 'react';
import profilePhoto from '../img/profilephoto.jpeg';
import styles from './Bio.module.css';
import { bio } from '../data/bioData';

import Workpermit from './Workpermit';

export default function Bio(props) {
	return (
		<div className={styles.bio}>

			<div>
				<img className={styles.profilePhoto} src={profilePhoto} alt="profilephoto"/>
			</div>

			<div>
				<h1>Piraya Sanpakij</h1>
				<h2 id="bioSubtitle">
					{props.french ? bio.h2[1] : bio.h2[0]}
				</h2>
				<p>
					{props.french ? bio.p[1] : bio.p[0]}
				</p>
				<Workpermit french={props.french}/>
			</div>

		</div>
	);
};