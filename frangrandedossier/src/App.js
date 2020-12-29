import React from 'react';
import ProjectsCarrousel from './Components/ProjectsCarrousel/ProjectsCarrousel.js';
import './App.css';
import './FranDossier.css';

function App() {

	return (
		<div className="App">
			<header className="App-header">
			</header>
			<div className="App-body no-select">
				<ProjectsCarrousel></ProjectsCarrousel>
			</div>
			<div id="footer" className="App-footer no-select">
				<p>This is a collection of <a class="App-link" href="mailto: francisjgrande@gmail.com">Fran Grande</a>'s works</p>
				<p>Doors take you to itch.io</p>
				<p class="small-note">Website optimised for 1920x1080</p>
			</div>
		</div>
	);
}

export default App;