import React from 'react';
import ProjectPage from './ProjectPage';
import { projects } from '../data/projectData';

export default function LaRousseliere(props) {
	return (
		<ProjectPage project={projects[4]} french={props.french}/>
	)
}