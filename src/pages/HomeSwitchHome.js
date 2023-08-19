import React from 'react';
import ProjectPage from './ProjectPage';
import { projects } from '../data/projectData';

export default function HomeSwitchHome(props) {
	return (
		<ProjectPage project={projects[1]} french={props.french}/>
	)
}