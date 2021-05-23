import React from 'react';
import ProjectsCarrousel from './Components/ProjectsCarrousel/ProjectsCarrousel.jsx';
import './App.css';
import './FranDossier.css';

function App() {
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
				{/* TO DO: add a parallex background of sorts. */}
				<ProjectsCarrousel></ProjectsCarrousel>
			</div>
			<div id="footer" className="App-footer no-select">
				<p>This is a collection of <a className="App-link" href="mailto: francisjgrande@gmail.com">Fran Grande</a>'s works</p>
				<p>Doors take you to itch.io</p>
				<p className="small-note">Website optimised for 1920x1080, under construction</p>
			</div>
		</div>
	);
}

export default App;