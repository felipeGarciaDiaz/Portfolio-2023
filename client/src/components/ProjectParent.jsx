import React from 'react';
import Bounce from 'react-reveal/Bounce';
import ProjectsDesc from './utils/ProjectDesc.jsx';
import webTixPic from './media/resources/WEBTIXHELPDESKAPP.png';
import netNukePic from './media/resources/NETNUKEAPP.png';
import niiceKreamPic from './media/resources/NIICEKREAMAPP.png';
import nukeChatPic from './media/resources/NUKECHATAPP.png';
import cardSitePic from './media/resources/CARDSITEAPP.png';
import regexFormsPic from './media/resources/REGEXFORMSAPP.png';
import dubleTrublePic from './media/resources/DUBLETRUBLEAPP.png';

function ProjectsBody(props) {
	const projectsList = [
		{
			id: 1,
			title: 'WebTix',
			imgSource: webTixPic,
			git: 'https://github.com/felipeGarciaDiaz/nukeChat',
			link: 'http://felipedev.us:68/',
			desc: 'WebTix is an AI assisted, community driven helpdesk software intended to revolutionize how helpdesk software operates, with features that focus directly on enterprise use, IT departments will be able to more efficiently complete and publish ticket repair requests with ease',
			stack: 'Javascript, NodeJS, Express, Socket.io, ReactJS, MySQL, MUI',
		},
		{
			id: 2,
			title: 'Nuke Chat',
			imgSource: netNukePic,
			git: 'https://github.com/felipeGarciaDiaz/nukeChat',
			link: 'http://felipedev.us:68/',
			desc: 'Nuke Chat is a chat room that lets you create a secure private room to communicate with 1 or more people. what makes this chat unique is the nuke button, allowing anyone in the chat to destroy all traces of the messages instantly',
			stack: 'Javascript, NodeJS, Express, Socket.io, ReactJS',
		},
		{
			id: 3,
			title: 'Niice kream',
			imgSource: niiceKreamPic,
			git: 'https://github.com/felipeGarciaDiaz/niicekream',
			link: 'http://felipedev.us:6050/',
			desc: 'A website made for a clients ice-cream shop (my version of it), handles simple requests for icecream flavors and showcases the flavors to customers. Its also easily updatable allowing the client to add new flavors with ease.',
			stack: 'Javascript, ReactJS, NodeJS, Express, Node-Mailer, Socket.io',
		},
		{
			id: 4,
			title: 'Net Nuke',
			imgSource: nukeChatPic,
			git: 'https://github.com/felipeGarciaDiaz/netNuke',
			link: '/404',
			desc: 'Net Nuke is a program that takes advantage of a WPA2 vulnerability in routers, allowing a user to remotely connect to a raspberry pi, and shut down a network without even being on that network using a deauth attack',
			stack: 'Python, Aircrack, Bluetooth, Raspberry Pi',
		},
		{
			id: 5,
			title: 'Card Site',
			imgSource: cardSitePic,
			git: 'https://github.com/felipeGarciaDiaz/Business-Card-Site',
			link: 'http://felipedev.us:61/',
			desc: 'A website made to display your projects and your skills in a very clean and quick way, designed for contactless business cards, where you swipe it near a phone and it brings you straight to this website.',
			stack: 'Javascript, ReactJS, NodeJS, Express, Node-Mailer, Socket.io',
		},
		{
			id: 6,
			title: 'regex-forms',
			imgSource: regexFormsPic,
			git: 'https://github.com/felipeGarciaDiaz/nukeChat',
			link: '/404',
			desc: "An API I designed to allow handling form validation more securely, implement this API in your nodeJS server to validate forms using regular expressions to ensure users aren't inputting malicious data in your forms",
			stack: 'Javascript, API, NPM, NodeJS',
		},
		{
			id: 7,
			title: 'Duble Truble',
			imgSource: dubleTrublePic,
			git: 'https://github.com/felipeGarciaDiaz/doubleTrouble',
			link: 'http://felipedev.us:81/',
			desc: 'iOS game made using phaser3 framework, if you want to try this make sure your on a phone and your phone is sideways, as this app is no longer in the app store for the time being.',
			stack: 'Javascript, Phaser3, NodeJS, Express, MongoDB',
		},
	];

	return (
		<React.Fragment>
			{projectsList.map((projects) => (
				<ProjectsDesc
					title={projects.title}
					pic={projects.imgSource}
					git={projects.git}
					link={projects.link}
					desc={projects.desc}
					stack={projects.stack}
				/>
			))}
		</React.Fragment>
	);
}
//HERE WE WILL GENERATE ALL THE PROJECTS FROM THE Projects.jsx file
export default ProjectsBody;
