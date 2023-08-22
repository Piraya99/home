import React from 'react';
import ProjectPage from './ProjectPage';
import { projects } from '../data/projectData';

export default function Maynooth(props) {
	return (
		<ProjectPage french={props.french} project={projects[3]} />
	)
}