import React from 'react';
import styles from './Feature.module.css';

import html from '../img/icon/html.png';
import css from '../img/icon/css.png';
import javascript from '../img/icon/javascript.png';
import react from '../img/icon/react.png';
import git from '../img/icon/git.png';

export default function Feature(props) {
	return (
		<div className="feature">
			<div className="container">

				<div className="box">
					<h4>{props.french ? "Languages Techniques" : "Programming Languages"}</h4>
					<ul className={styles.icon}>
						<li><img src={html} alt="html" />HTML</li>
						<li><img src={css} alt="css" />CSS</li>
						<li><img src={javascript} alt="javascript" />Javascript</li>
						<li><img src={react} alt="react" />React</li>
						<li><img src={git} alt="git" />Git & Github</li>
					</ul>
				</div>

				<div className="box">
					<h4>{props.french ? "Langues du Monde" : "World Languages"}</h4>
					<ul>
						<li title='Hello :)'>
							<span className="fi fi-gb"></span>
							{props.french ? "Anglais" : "English"}
						</li>
						<li title='Bonjour !' >
							<span className="fi fi-fr"></span>
							{props.french ? "Français" : "French"}
						</li>
						<li title='こんにちは ^^'>
							<span className="fi fi-jp"></span>
							{props.french ? "Japonais" : "Japanese"}
						</li>
						<li title='สวัสดีค่ะ :)'>
							<span className="fi fi-th"></span>
							{props.french ? "Thaï" : "Thai"}
						</li>
					</ul>
				</div>	

				<div className="box">
					<h4>{props.french ? "Compétences" : "Skills"}</h4>
					<ul className={styles.longlist}>
						<li>
							<span className="material-icons md-24">palette</span>
							{props.french ? "Design Graphique" : "Graphic Design"}
						</li>
						<li>
							<span className="material-icons md-24">computer</span>
							{props.french ? "Design UX/UI" : "UI/UX Design"}
						</li>
						<li>
							<span className="material-icons md-24">edit</span>
							{props.french ? "Création de Contenu" : "Content Creation"}
						</li>
						<li>
							<span className="material-icons md-24">rocket_launch</span>
							{props.french ? "Gestion de Projet" : "Project Management"}
						</li>
					</ul>
				</div>
			</div>
		</div>
		);
};