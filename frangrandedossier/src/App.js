import React from 'react';
import ProjectsCarrousel from './Components/ProjectsCarrousel/ProjectsCarrousel.js';
import './App.css';
import './FranDossier.css';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="no-select">FlanGrande's Dossier</h1>
			</header>
			<div className="App-body no-select">
				<ProjectsCarrousel></ProjectsCarrousel>
			</div>
			<div id="footer" className="App-footer no-select">
				<p>This is a collection of Fran Grande's personal works.</p>
			</div>
		</div>
	);
}

export default App;