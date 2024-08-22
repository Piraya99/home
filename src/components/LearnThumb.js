import React from 'react';
import { Link } from "react-router-dom"; 

export default function LearnThumb(props) {
	return (
		<div className="card">
			{/* <Link to={props.thumbObject.link}> */}
				<img src={props.thumbObject.thumb} alt={props.thumbObject.title} />
			{/* </Link> */}
			{/* <Link to={props.thumbObject.link}> */}
				<h4>
					{props.french ? props.thumbObject.title[1] : props.thumbObject.title[0]}
				</h4> 
			{/* </Link> */}
		</div>
	);
};