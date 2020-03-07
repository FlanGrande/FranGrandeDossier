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
		this.maxLeft = -window.screen.width*2; //2 should "become number_of_projects"

		this.state = {
			number_of_projects: 0
		};
	}

	handleLeftAreaClick() {
		const wrapper = this.pcRef.current;
		this.currentPos += window.screen.width;

		if(this.currentPos > this.minLeft)
		{
			this.currentPos = this.minLeft;
		}

		wrapper.style.left = this.currentPos+"px";
	}

	handleRightAreaClick() {
		const wrapper = this.pcRef.current;
		this.currentPos -= window.screen.width;
		console.log(this.pcRef);

		if(this.currentPos < this.maxLeft)
		{
			this.currentPos = this.maxLeft;
		}

		wrapper.style.left = this.currentPos+"px";
	}

	render() {
		this.number_of_projects = React.Children.count(this.props.children);
		const link_1minute = "https://frangrande.itch.io/1minute";
		
		const logo_asteroidsron = "https://img.itch.zone/aW1hZ2UvODYwNzMvNDA1OTAwLmdpZg==/original/AmJ2nU.gif";
		const link_asteroidsron = "https://frangrande.itch.io/asteroidsnron";

		return (
			<div>
				<div ref={this.pcRef} name="projects-carrousel" className="projects-carrousel">
					<ProjectDoor name="1Minute" image_url={logo_1minute} game_link={link_1minute} />
					<ProjectDoor name="Asteroids & Ron" image_url={logo_asteroidsron} game_link={link_asteroidsron} />
					<ProjectDoor name="TetrisClon" />
					<ProjectDoor name="BumperBallClon" />
					<ProjectDoor name="Cthulhumpage" />
					<ProjectDoor name="CurillaVSEvil" />
					<ProjectDoor name="TopItUp" />
					<ProjectDoor name="JuegosParaMaribel" />
					<ProjectDoor name="King Skeleton" />
					<ProjectDoor name="PangClon" />
					<ProjectDoor name="PongClon" />
					<ProjectDoor name="ShaderLibrary" />
					<ProjectDoor name="SnakeClon" />
					<ProjectDoor name="TetrisFight" />
				</div>
				<div id="carrousel-left-area" onClick={() => this.handleLeftAreaClick()}>{"←"}</div>
				<div id="carrousel-right-area" onClick={() => this.handleRightAreaClick()}>{"→"}</div>
			</div>
		)
	}
}

export default ProjectsCarrousel;