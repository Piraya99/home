import React from 'react';
import styles from './Contact.module.css';
import bgContact from '../img/bgContact.jpg';

export default function Contact(props) {
	return (
		<div className={styles.contact}>
			<img src={bgContact} alt="bgContact" />
			<div className={styles.contactInfo}>
				<h3>{props.french ? "Travaillez avec moi" : "Work with me"}</h3>
				<p>{props.french ? "Contactez moi pour parler de votre projet !" : 
								"Contact me and let's talk about your project!"}</p>
				<p className={styles.email}>pirayatarn@gmail.com</p>
			</div>
		</div>
	);
};