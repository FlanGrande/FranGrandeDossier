import React from 'react';
import Particles from 'react-tsparticles'
import frame from './frame.png';
import door_reflection from './door_reflection.png';
import door_top from './door_top.png';
import door_bottom from './door_bottom.png';
import cog from './cog.png';
import "./ProjectDoor.css";
import "./ProjectDoorParticles.css"

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
			<div ref={this.wrapperRef} id={this.props.name} className={this.props.className}>
				<div className="wrapper">
					<a href={this.props.game_link} target="_blank" rel="noopener noreferrer">
						<img className="frame" alt="frame" src={frame} onMouseEnter={() => this.handleMouseEnter()} onMouseLeave={() => this.handleMouseLeave()} draggable="false" />
					</a>
				</div>
				<div className="wrapper">
					{/*<Particles 
						id={this.props.name + "-particles"}
						className="spark-particles"
						options={{
							fpsLimit: 60,
							particles: {
								number: {
									density: {
										enable: true,
										value_area: 8
									},
									value: 1
								},
								color: {
									value: "#ff8400"
								},
								shape: {
									type: "circle"
								},
								opacity: {
									value: 1.0
								},
								size: {
									random: true,
									value: 2
								},
								move: {
									direction: "right",
									enable: true,
									outMode: "bottom",
									random: true,
									speed: 2,
									straight: true,
									trail: {
										enable: true,
										length: 6.0
									},
									gravity: {
										enable: true,
										acceleration: 4.0,
										maxSpeed: 30.0
									}
								}
							},

						}}/>*/}
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