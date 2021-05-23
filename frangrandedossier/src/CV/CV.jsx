import React from 'react';
import '../App.css';
import './CV.css';

function CV() {
	React.useEffect(() => {
		function handleResize() {
			console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)

			
		}
	
		window.addEventListener('resize', handleResize)
	})
	return (
		<div className="App">
			<header className="App-header">
			</header>
			<div className="App-body no-select">
				<h1>CV</h1>
			</div>
		</div>
	);
}

export default CV;