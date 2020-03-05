import React from 'react';
import ProjectDoor from './Components/ProjectDoor/ProjectDoor.js';
import './App.css';
import './FlanDossier.css';
import logo_1minute from './Assets/1Minute.png';

function App() {
	const link_1minute = "https://frangrande.itch.io/1minute";
	
	const logo_asteroidsron = "https://img.itch.zone/aW1hZ2UvODYwNzMvNDA1OTAwLmdpZg==/original/AmJ2nU.gif";
	const link_asteroidsron = "https://frangrande.itch.io/asteroidsnron";

	return (
		<div className="App">
			<header className="App-header">
				<h1>Fran Grande's Dossier</h1>
			</header>
			<div id="projects-carrousel" name="projects-carrousel">
				<ProjectDoor 
					name="1Minute"
					image_url={logo_1minute}
					game_link={link_1minute} />
				<ProjectDoor
					name="Asteroirds & Ron"
					image_url={logo_asteroidsron}
					game_link={link_asteroidsron} />
				<ProjectDoor
					name="TetrisClon" />
			</div>
			<p>This is a collection of Fran Grande's personal works.</p>
		</div>
	);
}

export default App;