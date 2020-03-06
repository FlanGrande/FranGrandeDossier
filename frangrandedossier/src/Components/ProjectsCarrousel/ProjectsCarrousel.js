import React from 'react';
import ProjectDoor from '../ProjectDoor/ProjectDoor.js';
import logo_1minute from '../../Assets/1Minute.png';
import "./ProjectsCarrousel.css";

class ProjectsCarrousel extends React.Component {
	constructor(props) {
		super(props);
		this.pcRef = React.createRef();
		this.currentPos = 0;
		this.minLeft = 0;
		this.maxLeft = -2620; /* Maybe this can be calculated */
	}

	handleLeftAreaMouseEnter() {
		const wrapper = this.pcRef.current;
		this.currentPos += 1000;

		if(this.currentPos > this.minLeft)
		{
			this.currentPos = this.minLeft;
		}

		wrapper.style.left = this.currentPos+"px";
	}

	handleLeftAreaMouseLeave() {
	}

	handleRightAreaMouseEnter() {
		const wrapper = this.pcRef.current;
		this.currentPos -= 1000;

		if(this.currentPos < this.maxLeft)
		{
			this.currentPos = this.maxLeft;
		}

		wrapper.style.left = this.currentPos+"px";
	}

	handleRightAreaMouseLeave() {
	}

	render() {
		const link_1minute = "https://frangrande.itch.io/1minute";
		
		const logo_asteroidsron = "https://img.itch.zone/aW1hZ2UvODYwNzMvNDA1OTAwLmdpZg==/original/AmJ2nU.gif";
		const link_asteroidsron = "https://frangrande.itch.io/asteroidsnron";

		return (
			<div>
				<div ref={this.pcRef} name="projects-carrousel" className="projects-carrousel">
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
					<ProjectDoor
						name="BumperBallClon" />
					<ProjectDoor
						name="Cthulhumpage" />
					<ProjectDoor
						name="CurillaVSEvil" />
					<ProjectDoor
						name="TopItUp" />
					<ProjectDoor
						name="JuegosParaMaribel" />
					<ProjectDoor
						name="King Skeleton" />
					<ProjectDoor
						name="PangClon" />
					<ProjectDoor
						name="PongClon" />
					<ProjectDoor
						name="ShaderLibrary" />
					<ProjectDoor
						name="SnakeClon" />
					<ProjectDoor
						name="TetrisFight" />
				</div>
				<div id="carrousel-left-area" onMouseEnter={() => this.handleLeftAreaMouseEnter()} onMouseLeave={() => this.handleLeftAreaMouseLeave()}></div>
				<div id="carrousel-right-area" onMouseEnter={() => this.handleRightAreaMouseEnter()} onMouseLeave={() => this.handleRightAreaMouseLeave()}></div>
			</div>
		)
	}
}

export default ProjectsCarrousel;