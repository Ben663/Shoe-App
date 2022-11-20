import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
		<div className='header'>
			<Link
				className='link'
				to='/'>
				Home
			</Link>
			<Link
				className='link'
				to='/shoes'>
				All Shoes
			</Link>
			<Link
				className='link'
				to='/shoes'>
				Add Shoe
			</Link>
		</div>
	);
}

export default Header;
