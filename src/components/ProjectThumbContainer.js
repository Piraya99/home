import React from 'react';

import ProjectThumb from './ProjectThumb';
import { projects } from '../data/projectData';

export default function ProjectThumbContainer(props) {
	return (
		<section id="projects" className="anchor">
			<h3>Portfolio</h3>
			<div className="container" id="projects">
			    {projects.map(project => 
			    	<ProjectThumb french={props.french} thumbObject={project} />
			  	)}
		    </div>
		</section>
		);
};