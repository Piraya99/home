import React from 'react';

import ProjectThumbContainer from '../components/ProjectThumbContainer';

export default function Home(props) {
	return (
		<main>
	        < ProjectThumbContainer french={props.french} />
      	</main>
	);
};