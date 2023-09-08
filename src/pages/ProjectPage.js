import React from 'react';
import styles from './ProjectPage.module.css';

import Carousel from '../components/Carousel';

export default function ProjectPage(props) {
	return (
		<main className={styles.projectpage}>
			<div className={styles.container}>
				<div className={styles.left}>
					<h3 className={styles.h3}>{props.project.title}</h3>
					<p>{props.french ? props.project.introduction[1] : props.project.introduction[0]}</p>
				</div>

				<div className={styles.right}>
					<h4 className={styles.h4}>Project details</h4>
					<p>{props.french ? 'Année : ' : 'Year:'} {props.project.year}</p>
					<p>Client: {props.project.client}</p>
					<p>{props.french ? 'Outils : ' : 'Tools:'} {props.project.tools}</p>
				</div>
			</div>
			< Carousel project={props.project}/>
		</main>
	);
};