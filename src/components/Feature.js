import React from 'react';
import styles from './Feature.module.css';

function Feature(props) {
	return (
		<div className="feature">
			<div className="container">

				<div className="box">
					<h4>{props.french ? "Languages Techniques" : "Programming Languages"}</h4>
					<ul>
						<li className={styles.shortlist}>
							<span className="material-icons md-24">html</span>
							HTML
						</li>
						<li className={styles.shortlist}>
							<span className="material-icons md-24">css</span>
							CSS
						</li>
						<li className={styles.shortlist}>
							<span className="material-icons md-24">javascript</span>
							Javascript
						</li>
						<li className={styles.shortlist}>
							<span className="material-icons md-24">javascript</span>
							React
						</li>
						<li className={styles.shortlist}>
							<span className="material-icons md-24">terminal</span>
							Git&Github
						</li>
					</ul>
				</div>

				<div className="box">
					<h4>{props.french ? "Langues du Monde" : "World Languages"}</h4>
					<ul>
						<li className={styles.shortlist} title='Hello :)'>
							<span className="fi fi-gb"></span>
							{props.french ? "Anglais" : "English"}
						</li>
						<li className={styles.shortlist} title='Bonjour !' >
							<span className="fi fi-fr"></span>
							{props.french ? "Français" : "French"}
						</li>
						<li className={styles.shortlist} title='こんにちは ^^'>
							<span className="fi fi-jp"></span>
							{props.french ? "Japonais" : "Japanese"}
						</li>
						<li className={styles.shortlist} title='สวัสดีค่ะ :)'>
							<span className="fi fi-th"></span>
							{props.french ? "Thaï" : "Thai"}
						</li>
					</ul>
				</div>	

				<div className="box">
					<h4>{props.french ? "Compétences" : "Skills"}</h4>
					<ul>
						<li className={styles.longlist}>
							<span className="material-icons md-24">palette</span>
							{props.french ? "Design Graphique" : "Graphic Design"}
						</li>
						<li className={styles.longlist}>
							<span className="material-icons md-24">computer</span>
							{props.french ? "Design UX/UI" : "UI/UX Design"}
						</li>
						<li className={styles.longlist}>
							<span className="material-icons md-24">edit</span>
							{props.french ? "Création de Contenu" : "Content Creation"}
						</li>
						<li className={styles.longlist}>
							<span className="material-icons md-24">rocket_launch</span>
							{props.french ? "Gestion de Projet" : "Project Management"}
						</li>
					</ul>
				</div>
			</div>
		</div>
		);
};

export default Feature;