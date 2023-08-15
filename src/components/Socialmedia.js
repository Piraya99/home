import React from 'react';
import { socialmedias } from './socialmediaData';	

import SocialmediaCard from './SocialmediaCard';

function Socialmedia(props) {
	return (
	    <div>
	      {socialmedias.map(socialmedia => 
	    <SocialmediaCard socialmediaObject = {socialmedia} />
	  )}
	    </div>
	)
};

export default Socialmedia;