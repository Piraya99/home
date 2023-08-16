import React from 'react';
import styles from './Experience.module.css';
import { works } from './experienceData';
import { studies } from './experienceData';

import ExperienceCard from './ExperienceCard';

export default function Experience(props) {
	return (
		<div className={styles.experience}>
			<div className="container">
					
					<div className="table-left">
						<table>
							<thead>
								<tr>
									<th colspan="2">
										<h3>{props.french ? 'Expériences Professionnelles':
															'Working Experiences'}</h3>
									</th>
								</tr>
							</thead>
							<tbody>
								{works.map(work => 
	    							<ExperienceCard french={props.french} experienceObject={work} />
	  							)}
							</tbody>
						</table>
					</div>

					<div className="table-right">
						<table>
							<thead>
								<tr>
									<th colspan="2">
										<h3>{props.french ? 'Formation':'Education'}</h3>
									</th>
								</tr>
							</thead>
							<tbody>
								{studies.map(study => 
	    							<ExperienceCard french={props.french} experienceObject={study} />
	  							)}
							</tbody>
						</table>
					</div>
				</div>
		</div>
	);
};