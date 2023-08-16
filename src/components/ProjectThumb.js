import React from 'react';

export default function ProjectThumb(props) {
	return (
		<div className="project">
			<img src={props.thumbObject.src} alt={props.thumbObject.title} />
			<h4><a href={props.thumbObject.link}>
				{props.thumbObject.title}
			</a></h4> 
			<h5>
				{props.french ? props.thumbObject.subtitle[1] : props.thumbObject.subtitle[0]}
			</h5>
		</div>
	);
};