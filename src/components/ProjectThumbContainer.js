import React from 'react';

import ProjectThumb from './ProjectThumb';
import { projects } from './projectData';

export default function ProjectThumbContainer(props) {
	return (
		<section>
			<h3>Portfolio</h3>
			<div className="container" id="projects">
			    {projects.map(project => 
			    	<ProjectThumb french={props.french} thumbObject={project} />
			  	)}
		    </div>
		</section>
		);
};