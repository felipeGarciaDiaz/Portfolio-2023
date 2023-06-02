import React from 'react';
import Bounce from 'react-reveal/Bounce';
function ProjectDesc(props) {
	return (
		<React.Fragment>
			<div id="projects-group" className="row">
				<Bounce left>
					<div
						id="project-showcase-body"
						className="col s6 m6 l6 xl6"
					>
						<div id="test2" className="col s12 m12 l12 xl12">
							<p className="center-align">
								<img
									id="project-img"
									className="responsive-img"
									src={props.pic}
									alt={props.title + 'screen view example'}
								/>
							</p>
						</div>{' '}
						<div id="test2" className="col s12 m12 l12 xl12">
							<h3 id="tech-worked" className="center-align">
								<b id="stack-intro">Tech used: </b>
								{props.stack}
							</h3>{' '}
						</div>
					</div>
				</Bounce>
				<Bounce bottom>
					<div className="col s1 m1 l1 xl1"></div>
					<div
						id="project-description-body"
						className="col s5 m5 l5 xl5"
					>
						<h1 id="project-title">{props.title}</h1>
						<h4 id="project-desc">{props.desc}</h4>
					</div>
				</Bounce>
			</div>
		</React.Fragment>
	);
}

export default ProjectDesc;
