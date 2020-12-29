import React from 'react';
/*import Particles from 'reactparticles'*/
import frame from './frame.png';
import door_reflection from './door_reflection.png';
import door_top from './door_top.png';
import door_bottom from './door_bottom.png';
import cog from './cog.png';
import "./ProjectDoor.css";

class ProjectDoor extends React.Component {
	constructor(props) {
		super(props);
		this.wrapperRef = React.createRef();
	}

	handleMouseEnter() {
		const wrapper = this.wrapperRef.current;
		wrapper.classList.add("open");
	}

	handleMouseLeave() {
		setTimeout(
		    function() {
				const wrapper = this.wrapperRef.current;
				wrapper.classList.remove("open");
		    }
		    .bind(this),
		    3000
		);
	}

	render() {
		return (
			<div ref={this.wrapperRef} id={this.props.name} className="project-door-box">
			{/*<Particles 
					id={this.props.name + "-particles"}
					className="spark-particles"
					options={{
						fpsLimit: 60,
						particles: {
							color: {
							  value: "#df8400",
							},
							collisions: {
							  enable: true,
							},
							move: {
							  direction: "bottom",
							  enable: true,
							  outMode: "bounce",
							  random: false,
							  speed: 6,
							  straight: false,
							  trail: {
								  enable: true,
								  fillColor: "#ffcc88",
								  length: 0.1
							  }
							},
							number: {
							  density: {
								enable: false,
								value_area: 800,
							  },
							  value: 10,
							},
							opacity: {
							  value: 0.9,
							},
							shape: {
							  type: "line",
							},
							size: {
							  random: true,
							  value: 5,
							},
						  }
					}}/>*/}
				<div className="wrapper">
					<div className="cogs-left">
						<img className="cog c1" alt="cog" src={cog} draggable="false" />
						<img className="cog c2" alt="cog" src={cog} draggable="false" />
						<img className="cog c3" alt="cog" src={cog} draggable="false" />
						<img className="cog c4" alt="cog" src={cog} draggable="false" />
						<img className="cog c5" alt="cog" src={cog} draggable="false" />
						<img className="cog c6" alt="cog" src={cog} draggable="false" />
						<img className="cog c7" alt="cog" src={cog} draggable="false" />
						<img className="cog c8" alt="cog" src={cog} draggable="false" />
					</div>
					<div className="cogs-right">
						<img className="cog c1" alt="cog" src={cog} draggable="false" />
						<img className="cog c2" alt="cog" src={cog} draggable="false" />
						<img className="cog c3" alt="cog" src={cog} draggable="false" />
						<img className="cog c4" alt="cog" src={cog} draggable="false" />
						<img className="cog c5" alt="cog" src={cog} draggable="false" />
						<img className="cog c6" alt="cog" src={cog} draggable="false" />
						<img className="cog c7" alt="cog" src={cog} draggable="false" />
						<img className="cog c8" alt="cog" src={cog} draggable="false" />
					</div>
					<a href={this.props.game_link} target="_blank" rel="noopener noreferrer">
						<img className="frame" alt="frame" src={frame} onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()} draggable="false" />
					</a>
					{/*<img className="door_reflection" alt="door_reflection" src={door_reflection} />*/}
					<img className="game_logo" alt={this.props.name} src={this.props.image_url} draggable="false" />
					<img className="door_top" alt="door_top" src={door_top} draggable="false" />
					<img className="door_bottom" alt="door_bottom" src={door_bottom} draggable="false" />
				</div>
			</div>
		)
	}
}

export default ProjectDoor;