import React from 'react';
import { Link } from "react-router-dom"; 

export default function ProjectThumb(props) {
	return (
		<div className="project">
			<img src={props.thumbObject.src} alt={props.thumbObject.title} />
			<h4><Link to={props.thumbObject.link}>
				{props.thumbObject.title}
			</Link></h4> 
			<h5>
				{props.french ? props.thumbObject.subtitle[1] : props.thumbObject.subtitle[0]}
			</h5>
		</div>
	);
};