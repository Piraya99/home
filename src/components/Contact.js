import React from 'react';
import styles from './Contact.module.css';
import bgContact from '../img/bgContact.jpg';

export default function Contact(props) {
	return (
		<div className={styles.contact}>
			<img src={bgContact} alt="bgContact" />
			<div>
				<h3>{props.french ? "Travaillez avec moi" : "Work with me"}</h3>
				<p>{props.french ? "Me contacter pour parler de votre projet." : 
								"Contact and tell me about your project"}</p>
				<p className={styles.email}>pirayatarn@gmail.com</p>
			</div>
		</div>
	);
};