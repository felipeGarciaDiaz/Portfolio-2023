import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';
import { SkillData } from './utils/data.js';
import BarChart from './utils/BarChart';
import Robot from './media/resources/robot.png';
import ProfilePic from './media/resources/profile_pic.jpg';
function ContentBody(props) {
	const [skillData, setSkillData] = useState({
		labels: SkillData.map((data) => data.skill),
		datasets: [
			{
				label: 'My Skills',
				data: SkillData.map((data) => data.skillMastered),
				backgroundColor: [
					'#214DA3',
					'#4882FF',
					'#3C60AD',
					'#6892E4',
					'#FFDB5B',
					'#6892E4',
				],
			},
		],
		legend: {
			display: false,
		},
	});
	return (
		<React.Fragment>
			<div id="about" className="row">
				<div className="container">
					<Bounce right>
						<div
							id="content-box"
							className="about-me col s12 m10 l10 xl10 offset-m1 offset-x1 offset-xl1"
						>
							<h1 id="content-title">
								<span id="content-title-me">About</span> Me
							</h1>
							<h5 id="content-desc">
								I've had a passion for computers ever since I
								was 12 and decided to create my own server.
								Since then I've become someone who can create
								anything they want in the web. My experience
								with Web-App Development combined with my
								education in Cyber Security allows me to create
								secure, professional, and aesthetic looking
								applications for personal and enterprise use.
							</h5>
						</div>
					</Bounce>
					<div className="col s12 m7 l8 xl8" id="skills-bar">
						<Bounce bottom>
							<BarChart chartData={skillData} />
							<p id="disclaimer-info">
								<b>
									** Honestly, I just really love how the bar
									graph looks and feels, I'd consider myself
									equally profficient and great in all of
									these languages. If there is something you
									want me to make / work on, I can most likely
									create it. **
								</b>
							</p>
							<div className="col offset-m2 offset-l2 offeset-xl2">
								{/* Use a profile picture of me instead, make it big, and square with roundded corners so it fits nicely in this section of the site!!! */}
								<img
									id="profile-pic"
									className="responsive-img center-align"
									src={ProfilePic}
									alt="Felipe Garcia Diaz"
								/>
							</div>
						</Bounce>
					</div>
					<Bounce left>
						<div
							id="content-box"
							className="tech-tools col s12 m5 l4 xl4 "
						>
							<h2 id="libs-title">Libraries</h2>
							<h5 id="libs-desc">
								Phaser 3, ChartJS, ExpressJS, Socket.io,
								Bootstrap, MaterialUI, Tailwind, SCSS, Rxjs
							</h5>

							<div
								id="libs-tools-icon"
								className="responsive-img center-align"
							>
								<img
									id="happy-robot"
									src={Robot}
									alt="Happy Robot"
								/>
							</div>
							<h2 id="tools-title">Tools</h2>
							<h5 id="tools-desc">
								Git, Figma, Webpack, Bash/CLI, VSCode, Vim,
								Linux
							</h5>
						</div>
					</Bounce>
				</div>
			</div>
		</React.Fragment>
	);
}

export default ContentBody;
