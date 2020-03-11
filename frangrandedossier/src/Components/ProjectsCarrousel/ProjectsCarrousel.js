import React from 'react';
import ProjectDoor from '../ProjectDoor/ProjectDoor.js';
import projects from '../../Assets/list_of_projects.json';
import "./ProjectsCarrousel.css";

class ProjectsCarrousel extends React.Component {
	constructor(props) {
		super(props);
		this.projectsCarrouselRef = React.createRef();
		this.pos = 0;

		var selector_array = [];

		this.state = {
			currentPosition: 0,
			numberOfProjects: projects.length,
			numberOfPages: Math.floor(projects.length / 5) + 1,
			listOfProjectsArray: projects,
			selectorArray: selector_array,
			selectedIndex: 0
		};

		for(var i = 0; i < this.state.numberOfPages; i++)
		{
			selector_array.push({
				position: -1 * (i * window.screen.width)
			});
		}
	}

	componentDidMount() {
		this.minLeft = 0;
		this.maxLeft = -window.screen.width * (this.state.numberOfPages - 1);
	}

	keepInBounds(pos) {
		var tmp_pos = pos;

		if(tmp_pos > this.minLeft)
		{
			tmp_pos = this.minLeft;
		}

		if(tmp_pos < this.maxLeft)
		{
			tmp_pos = this.maxLeft;
		}

		return tmp_pos;
	}

	left() {
		var index = this.state.selectedIndex - 1;
		this.pos += window.screen.width;
		this.pos = this.keepInBounds(this.pos);

		this.setState({
			currentPos: this.pos,
			selectedIndex: Math.max(0, index)
		})
	}

	right() {
		var index = this.state.selectedIndex + 1;
		this.pos -= window.screen.width;
		this.pos = this.keepInBounds(this.pos);

		this.setState({
			currentPos: this.pos,
			selectedIndex: Math.min(index, this.state.numberOfPages - 1)
		})
	}

	handleLeftAreaClick() {
		this.left();
	}

	handleRightAreaClick() {
		this.right();
	}

	handleSelectorChange(index, target_pos) {
		this.pos = target_pos;
		this.pos = this.keepInBounds(this.pos);

		this.setState({
			currentPos: this.pos,
			selectedIndex: index
		})
	}

	componentDidUpdate() {
		const wrapper = this.projectsCarrouselRef.current;
		wrapper.style.left = this.state.currentPos + "px";
	}

	render() {
		return (
			<div>
				<div ref={this.projectsSelectorRef} name="projects-selector" className="projects-selector">
					{this.state.selectorArray.map((item, index) => (
						<div key={index}>
							<input type="radio" name="selector" onChange={() => this.handleSelectorChange(index, item.position)} checked={index === this.state.selectedIndex} />
							<span className="selector_circle"></span>
						</div>
					))}
				</div>
				<div ref={this.projectsCarrouselRef} name="projects-carrousel" className="projects-carrousel">
					{this.state.listOfProjectsArray.map((item, index) => (
						<ProjectDoor key={index} name={item.name} image_url={item.logo} game_link={item.link} />
					))}
				</div>
				<div id="carrousel-left-area" className="no-select" onClick={() => this.handleLeftAreaClick()}>{"←"}</div>
				<div id="carrousel-right-area" className="no-select" onClick={() => this.handleRightAreaClick()}>{"→"}</div>
			</div>
		)
	}
}

export default ProjectsCarrousel;