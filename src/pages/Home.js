import React from 'react';

import Bio from '../components/Bio';
import Feature from '../components/Feature';
import Experience from './Experience';
import ProjectThumbContainer from '../components/ProjectThumbContainer';

export default function Home(props) {
	return (
		<main>
	        < Bio french={props.french} />
	        < Feature french={props.french} />
	        < Experience french={props.french} />
	        < ProjectThumbContainer french={props.french} />
      	</main>
	);
};