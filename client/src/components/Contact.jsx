import React, { useState } from 'react';
import Bounce from 'react-reveal/Bounce';

import socket from './utils/socket';
//PHONE <svg id="visual" viewBox="0 0 675 900" width="675" height="900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="675" height="900" fill="#19213d"></rect><path d="M0 764L37.5 770.8C75 777.7 150 791.3 225 765.8C300 740.3 375 675.7 450 662.7C525 649.7 600 688.3 637.5 707.7L675 727L675 0L637.5 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#da1061"></path><path d="M0 382L37.5 433.5C75 485 150 588 225 629.2C300 670.3 375 649.7 450 594.2C525 538.7 600 448.3 637.5 403.2L675 358L675 0L637.5 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#ba1457"></path><path d="M0 240L37.5 270.7C75 301.3 150 362.7 225 410.2C300 457.7 375 491.3 450 489C525 486.7 600 448.3 637.5 429.2L675 410L675 0L637.5 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#9b164c"></path><path d="M0 250L37.5 251.7C75 253.3 150 256.7 225 244.2C300 231.7 375 203.3 450 217.8C525 232.3 600 289.7 637.5 318.3L675 347L675 0L637.5 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#7d1640"></path><path d="M0 215L37.5 220.3C75 225.7 150 236.3 225 208.5C300 180.7 375 114.3 450 113.8C525 113.3 600 178.7 637.5 211.3L675 244L675 0L637.5 0C600 0 525 0 450 0C375 0 300 0 225 0C150 0 75 0 37.5 0L0 0Z" fill="#601434"></path></svg>

//DESKTOP <svg id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="900" height="600" fill="#19213d"></rect><path d="M0 502L50 474.5C100 447 200 392 300 401.8C400 411.7 500 486.3 600 493.3C700 500.3 800 439.7 850 409.3L900 379L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#da1061"></path><path d="M0 215L50 240.5C100 266 200 317 300 338.3C400 359.7 500 351.3 600 336.7C700 322 800 301 850 290.5L900 280L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#ba1457"></path><path d="M0 316L50 299.8C100 283.7 200 251.3 300 235.8C400 220.3 500 221.7 600 238.3C700 255 800 287 850 303L900 319L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#9b164c"></path><path d="M0 151L50 164.7C100 178.3 200 205.7 300 208.7C400 211.7 500 190.3 600 180.8C700 171.3 800 173.7 850 174.8L900 176L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#7d1640"></path><path d="M0 82L50 87C100 92 200 102 300 113C400 124 500 136 600 131.3C700 126.7 800 105.3 850 94.7L900 84L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z" fill="#601434"></path></svg>
function Contact(props) {
	let [isMessagePending, setIsMessagePending] = useState(true);

	const [data, setData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	let [msgResp, setMsgResp] = useState({
		title: null,
		description: null,
	});

	let [showButton, setShowButton] = useState('none');

	const handleChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		setMsgResp({
			title: 'Message Sent!',
			description:
				'Thank you! I will review this message as soon as possible, and reach back to you. In the mean time, feel free to review my projects and my github!',
		});

		setIsMessagePending(false);

		event.preventDefault();
		socket.emit('request-send-message', data);

		socket.on('reject-message', () => {
			setMsgResp({
				title: 'Message Rejected!',
				description:
					'Unfortunately your message was not sent, make sure you are using your correct email, name, and that your message is more then just one sentence. Your Phone Number is optional.',
			});
			setShowButton('inline-block');
		});
		setData({ name: '', email: '', phone: '', message: '' });
	};

	const handleRetry = () => {
		setIsMessagePending(true);
	};
	if (isMessagePending) {
		return (
			<React.Fragment>
				<Bounce right>
					<div id="contact-base" className="container">
						<div id="contact-form" className="row">
							<div className="col s12 m12 l12">
								<form onSubmit={handleSubmit}>
									<h1
										id="contact-title"
										className="center-align"
									>
										<span id="contact-title-section">
											Contact
										</span>{' '}
										Me
									</h1>
									<div className="col s12 m6 l6 xl6 offset-s0 offset-m3 offset-l3 offset-xl3">
										<input
											name="name"
											id="name-form"
											type="text"
											className="browser-default"
											placeholder="Name"
											value={data.name}
											onChange={handleChange}
										></input>
									</div>
									<div className="col s12 m6 l6 xl6 offset-s0 offset-m3 offset-l3 offset-xl3">
										<input
											name="email"
											id="email-form"
											type="email"
											className="browser-default"
											placeholder="Email"
											value={data.email}
											onChange={handleChange}
										></input>
										<input
											name="phone"
											id="phone-form"
											type="phone"
											className="browser-defaul"
											placeholder="Phone Number"
											value={data.phone}
											onChange={handleChange}
										></input>
									</div>

									<div className="col s12 m6 l6 xl6 offset-s0 offset-m3 offset-l3 offset-xl3">
										<h6 className="center-align">
											<textarea
												name="message"
												id="message-form"
												rows="7"
												placeholder="message here"
												value={data.message}
												onChange={handleChange}
											></textarea>
											<input
												id="submit-form"
												type="submit"
												value="Send Message"
											/>
										</h6>
									</div>
								</form>
							</div>
						</div>
					</div>
				</Bounce>
			</React.Fragment>
		);
	} else if (!isMessagePending) {
		return (
			<React.Fragment>
				<Bounce left>
					<div id="contact-base" className="container">
						<div id="contact-form" className="row">
							<div className="col s12 m12 l12">
								<h3 id="sent-title" className="center-align">
									{msgResp.title}
								</h3>
								<h5 id="sent-desc" className="center-align">
									{msgResp.description}
								</h5>
								<h5 className="center-align">
									<button
										id="submit-form"
										style={{
											display: showButton,
											backgroundColor: '#FFBA30',
											color: '#4D4D4D',
										}}
										onClick={handleRetry}
									>
										Resend
									</button>
								</h5>
							</div>
						</div>
					</div>
				</Bounce>
			</React.Fragment>
		);
	}
}

export default Contact;
