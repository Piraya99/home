import React from 'react';
import styles from './Feature.module.css';
import { programlangs, worldlangs, skills } from '../data/featureData';



export default function Feature(props) {
	return (
		<div className={styles.feature}>
			<div className="container">

				<div className="box">
					<h4>{props.french ? "Languages Techniques" : "Programming Languages"}</h4>
					<ul className={styles.programlang}>
						{programlangs.map(programlang =>
							<li><img src={programlang.src} alt={programlang.name} />{programlang.name}</li>
						)}
					</ul>
				</div>

				<div className="box">
					<h4>{props.french ? "Langues du Monde" : "World Languages"}</h4>
					<ul>
						{worldlangs.map(worldlang =>
							<li title={worldlang.hover}>
								<span className={worldlang.classname}></span>
								{props.french ? worldlang.name[1] : worldlang.name[0]}
							</li>
						)}
					</ul>
				</div>	

				<div className="box">
					<h4>{props.french ? "Compétences" : "Skills"}</h4>
					<ul className={styles.skill}>
						{skills.map(skill =>
						<li>
							<img src={skill.icon} alt="" />
							{props.french ? skill.name[1] : skill.name[0]}
						</li>
						)}
					</ul>
				</div>
			</div>
		</div>
		);
};