import React from 'react';

export default function ExperienceCard(props) {
	return (
		<tr> 
			<td>
				<strong>
					{props.french ? props.experienceObject.title[1] : props.experienceObject.title[0]}
				</strong><br />
					{props.french ? props.experienceObject.place[1] : props.experienceObject.place[0]}
			</td>
			<td className="date">
				{props.french ? props.experienceObject.start[1] : props.experienceObject.start[0]}
				<br />
				{props.french ? props.experienceObject.end[1] : props.experienceObject.end[0]}
			</td>
		</tr>
	);
};