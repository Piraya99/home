import React from 'react';

export default function ExperienceCard(props) {
	return (
		<tr> 
			<td>
				<strong>{props.experienceObject.title}</strong><br />{props.experienceObject.place}
			</td>
			<td className="date">{props.experienceObject.start}<br />{props.experienceObject.end}</td>
		</tr>
	);
};