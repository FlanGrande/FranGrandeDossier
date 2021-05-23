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
			<div id="footer" className="App-footer no-select">
				<p>This is a collection of <a className="App-link" href="mailto: francisjgrande@gmail.com">Fran Grande</a>'s works</p>
				<p>Doors take you to itch.io</p>
				<p className="small-note">Website optimised for 1920x1080</p>
			</div>
		</div>
	);
}

export default CV;