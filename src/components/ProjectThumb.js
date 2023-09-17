import React from 'react';
import { Link } from "react-router-dom"; 

export default function ProjectThumb(props) {
	return (
		<div className="card">
			<Link to={props.thumbObject.link}>
				<img src={props.thumbObject.thumb} alt={props.thumbObject.title} />
			</Link>
			<Link to={props.thumbObject.link}>
				<h4>{props.thumbObject.title}</h4> 
			</Link>
			<h5>
				{props.french ? props.thumbObject.subtitle[1] : props.thumbObject.subtitle[0]}
			</h5>
		</div>
	);
};