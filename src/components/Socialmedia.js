import React from 'react';
import { socialmedias } from '../data/socialmediaData';

import SocialmediaCard from './SocialmediaCard';

export default function Socialmedia(props) {
	return (
	    <div>
	      {socialmedias.map(socialmedia => 
	    <SocialmediaCard socialmediaObject={socialmedia} />
	  )}
	    </div>
	)
};