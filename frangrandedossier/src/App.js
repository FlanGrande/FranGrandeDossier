import React from 'react';
import ProjectsCarrousel from './Components/ProjectsCarrousel/ProjectsCarrousel.js';
import './App.css';

function App() {

	return (
		<div className="App">
			<header className="App-header">
				<h1>Fran Grande's Dossier</h1>
			</header>
			<div className="App-body">
				<ProjectsCarrousel></ProjectsCarrousel>
			</div>
			<div id="footer" className="App-footer">
				<p>This is a collection of Fran Grande's personal works.</p>
			</div>
		</div>
	);
}

export default App;