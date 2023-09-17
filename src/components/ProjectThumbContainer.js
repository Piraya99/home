import React from 'react';

import ProjectThumb from './ProjectThumb';
import { projects } from '../data/projectData';

export default function ProjectThumbContainer(props) {
	return (
		<section className="projects">
			<h3>{ props.french ? 'Projets' : 'Projects' }</h3>
			<div className="wrapper">
			    {projects.map(project => 
			    	<ProjectThumb french={props.french} thumbObject={project} />
			  	)}
		    </div>
		</section>
		);
};