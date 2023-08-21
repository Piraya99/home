import React from 'react';
import styles from './SocialmediaCard.module.css';

export default function SocialmediaCard(props) {
	return (
		<div className={styles.socialmediaCard}>
		<a href={props.socialmediaObject.link} target="_blank" rel="noreferrer">
			<svg className={props.socialmediaObject.name} viewBox="0 0 512 512">
				{props.socialmediaObject.paths.map(path =>
					<path d={path}></path>
				)}
			</svg>
		</a>
		</div>
	);
};

