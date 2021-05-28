import React from 'react';
import Helmet from "react-helmet"
import './CV.css';
import profilePic from './fran.jpg';

function CV() {
	React.useEffect(() => {
		function handleResize() {
			console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
		}
	
		window.addEventListener('resize', handleResize)
	})

	return (
		<div id="CV" className="fran-row">
		    <Helmet>
				<title>FlanGrande's CV</title>
				<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@302&display=swap" rel="stylesheet" />
		    </Helmet>
			<header className="CV-header">
			</header>
			<div id="CV-left-margin" className="fran-col-2"></div>
			<div id="CV-left-column" className="fran-col-2 no-select sticky full-screen-height">
				<div id="CV-left-column-container" className="sticky">
					<img id="profile-pic" className="fran-row fran-center" src={profilePic} alt="fran"></img>
					<h4 id="profile-name" className="fran-center">Francisco Javier Grande Escobedo</h4>
					<hr className="fran-center" />
					<h5 className="fran-center">WEB DEVELOPER</h5>
				</div>
				<div id="powered-by" className="fran-center align-bottom">
					<h6>Powered by <i className="fab fa-react"></i> ReactJS</h6>
				</div>
			</div>
			<div id="CV-right-column" className="fran-col-6 no-select">
				<h2>Profile</h2>
				<p>Web developer with more than 5 years of experience in a professional setting, having shipped tens of projects, participating from initial stages to delivery production.</p>
				<p>Adept in a wide array of programming languages, frameworks and platforms:</p>
				<ul>
					<li>Web holy trinity: HTML, CSS and Javascript</li>
					<li>C#</li>
					<li>Frameworks like Ionic, AngularJS or React</li>
					<li>NodeJS</li>
					<li>Java, specifically on Android development</li>
					<li>Python</li>
					<li>C++</li>
					<li>C</li>
					<li>Linux system administration</li>
				</ul>
				<p>"One of the most fulfilling experiences I had on my job was identifying friction points in my company's workflow and making tools for other technical and non-technical staff in order to help them avoid soul-crushing repetitive tasks.</p>
				<p>An example of this was a GUI tool that allowed non-technical colleagues to update the style of a website on the fly, without them needing to learn any CSS, which allowed front-end developers to focus on more relevant tasks. This tool reduced an average 2-3 hours boring job into a 10-20 minutes visually pleasing one."</p>
				<hr />
				<h3 id="CV-why-hire-me-title" className="fran-center">Why hire me</h3>
				<div id="CV-three-keys" className="fran-row fran-center">
					<div className="CV-one-key fran-col fran-col-4">
						<h4>Born for this</h4>
						<i className="fa fa-keyboard"></i>
						<p>
						Born with a keyboard under my arm, got my first PC, a pentium 2, when I was 8 years old.
						Developed a very good intuition early on which lead me to pursue a programming career from the get go.</p>
					</div>
					<div className="CV-one-key fran-col fran-col-4">
						<h4>Over five years</h4>
						<i id="CV-over-five">5+</i>
						<p>
						Experience developing web applications for more than five years in a professional and competitive industry.
						More than two years of experience working remotely.
						</p>
					</div>
					<div className="CV-one-key fran-col fran-col-4">
						<h4>Friendly and fun</h4>
						<i className="fa fa-grin-squint-tears"></i>
						<p>
						Easy-going, collaborative and assertive. 
						Able to offer a pleasant environment in the workplace.
						</p>
					</div>
				</div>
				<hr />
				<h2>Work experience</h2>
				<h4>Web Developer at Chauntry Ltd.</h4>
				<h5>2016 to present day</h5>
				<ul>
					<li>Worked on a huge variety of websites used by tens of thousands of users</li>
					<li>Brought mock-ups to live using ASP.NET MVC, HTML, CSS and various Javascript frameworks</li>
					<li>Created a tool based on SASS to allow non-technical staff and customers to modify the color pallete of their website</li>
					<li>Proposed the creation of a mobile dashboard app and developed the frontend of it using Ionic and AngularJS</li>
					<li>Integrated Google Maps into a website with customizable options like display and colour pallete</li>
					<li>Implemented internal tools and automation scripts to speed up everyday tasks, using Python and C#</li>
					<li>Maintained several databases based on SQL</li>
					<li>Utilised industry-wide tools like Git and SVN for version control</li>
					<li>Keep websites secure and PCI compliant</li>
					<li>Added localization for customers that needed multiple languages on their platform</li>
					<li>Wrote documentation to keep other developers informed about technical details of the projects</li>
					<li>Handled the server-side of things, e.g. initialize a website using IIS</li>
					<li>Worked as part of a team with other developers and project managers to bring projects to fruition</li>
				</ul>			
			</div>
			<div id="CV-right-margin" className="fran-col-2"></div>
		</div>
	);
}

export default CV;