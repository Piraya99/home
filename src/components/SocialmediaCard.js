import React from 'react';
import styles from './SocialmediaCard.module.css';

function SocialmediaCard(props) {
	return (
		<div className={styles.socialmediaCard}>
		<a href={props.socialmediaObject.link} target="_blank" rel="noreferrer">
			<svg className={props.socialmediaObject.name} viewBox="0 0 512 512">
					<path d={props.socialmediaObject.path1}></path>
					<path d={props.socialmediaObject.path2}></path>
					<path d={props.socialmediaObject.path3}></path>
					<path d={props.socialmediaObject.path4}></path>
			</svg>
		</a>
		</div>
	);
};

export default SocialmediaCard;

