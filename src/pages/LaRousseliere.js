import React from 'react';
import ProjectPage from './ProjectPage';
import { projects } from '../data/projectData';

export default function LaRousseliere(props) {
	return (
		<ProjectPage french={props.french} project={projects[4]} />
	)
}