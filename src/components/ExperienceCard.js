import React from 'react';

export default function ExperienceCard(props) {
	return (
		<tr> 
			<td>
				<strong>{props.experienceObject.title}</strong><br />{props.experienceObject.place}
			</td>
			<td className="date">
				{props.french ? props.experienceObject.start[1] : props.experienceObject.start[0]}
				<br />
				{props.french ? props.experienceObject.end[1] : props.experienceObject.end[0]}
			</td>
		</tr>
	);
};