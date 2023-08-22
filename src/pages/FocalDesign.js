import React from 'react';
import ProjectPage from './ProjectPage';
import { projects } from '../data/projectData';

export default function FocalDesign(props) {
	return (
		<ProjectPage french={props.french} project={projects[5]} />
	)
}