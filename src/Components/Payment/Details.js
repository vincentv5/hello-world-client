import React from 'react';
import SideBar from './SideBar';

const Details =(props) =>{
const {handlefocus,moveBack, submitEmail,handleChange,handleInput,state,handleMinus,handlePlus } = props; 
return (
	<div className='container main'>
	<br />
	<br />
		<div className='row'>
			<div className='col-sm-8'>
				<header className='details-header'>
					<h6 className='ml3' style={{color:'white'}}>Purchase terms</h6>
				</header>
				<article style={{padding:'10px'}}>
					<p>{state.description}</p>
				</article>
			</div>

			<SideBar 
				moveBack={moveBack}
				submitEmail={submitEmail}
				handleChange={handleChange}
				handleInput={handleInput}
				state={state}
				handleMinus={handleMinus}
				handlePlus={handlePlus}
				handlefocus={handlefocus}
			/>

		</div>
	</div>			

	)
}
export default Details;