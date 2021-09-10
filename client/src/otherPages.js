import React from 'react'
import {Link} from 'react-router-dom'

const OtherPage = ()=>{
	return (
		<div>
			Some other pages
			<Link to="/">Go back to home</Link>
		</div>
		);
};

export default OtherPage;