import React from 'react';

import Bio from './Bio';
import Feature from './Feature';
import Experience from './Experience';
import ProjectThumbContainer from './ProjectThumbContainer';

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