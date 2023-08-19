import React from 'react';
import { socialmedias } from '../data/socialmediaData';	

import SocialmediaCard from './SocialmediaCard';

export default function Socialmedia(props) {
	return (
	    <div className="socialmedia">
	      {socialmedias.map(socialmedia => 
	    <SocialmediaCard socialmediaObject={socialmedia} />
	  )}
	    </div>
	)
};