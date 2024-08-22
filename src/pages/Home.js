import React from 'react';

import LearnThumbContainer from '../components/LearnThumbContainer';

export default function Home(props) {
	return (
		<main>
	        < LearnThumbContainer french={props.french} />
      	</main>
	);
};