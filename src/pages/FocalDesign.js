import React from 'react';
import ProjectPage from './ProjectPage';
import { projects } from '../data/projectData';

export default function FocalDesign(props) {
	return (
		<ProjectPage project={projects[5]} french={props.french}/>
	)
}