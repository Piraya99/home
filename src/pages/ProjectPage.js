import React from 'react';
import styles from './ProjectPage.module.css';

export default function ProjectPage(props) {
	return (
		<div className={styles.projectpage}>
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
			<img src={props.project.src} alt={props.project.title} />
		</div>
	);
};