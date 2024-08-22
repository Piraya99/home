import React from 'react';

import LearnThumb from './LearnThumb';
import { courses } from '../data/learnData';

export default function LearnThumbContainer(props) {
	return (
		<section className="courses">
			<h3>{'Quel atelier vous ferait plaisir?'}</h3>
			<div className="wrapper">
			    {courses.map(course => 
			    	<LearnThumb french={props.french} thumbObject={course} />
			  	)}
		    </div>
		</section>
		);
};