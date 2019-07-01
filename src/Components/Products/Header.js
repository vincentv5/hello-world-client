import React from 'react';
import { Link } from 'react-router-dom';
const Header = () =>(

<div className='header'>
		<div className='logoImage'>
			<img className='logoImage' alt='' src='images/helloWorld.jpg' />
		</div>
		<br />
		<h5 className='tc title'>fairlyLand</h5>
		<h6 className='tc bracket'>( <span style={{color:'green'}}>100</span>/<span style={{color:'white'}}>2</span>/<span style={{color:'red'}}>0</span>)</h6>

		<div className='tc'>
		    <Link to='/' className =' links grow'>products</Link>
			<Link to='/contact' className ='links  grow '>
			contact
			</Link>
			<Link to='/contact' className ='links  grow '>
			feedbacks
			</Link>
		</div>
	</div>

	) 

export default Header;
