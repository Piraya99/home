import React from 'react';

import Bio from '../components/Bio';
import Feature from '../components/Feature';
import Experience from './Experience';

export default function About(props) {
	return (
		<main>
	        < Bio french={props.french} />
	        < Feature french={props.french} />
	        < Experience french={props.french} />
      	</main>
	);
};