import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { portfolioData } from "../../data/portfolioData";

const Portfolio = () => {
	const [letterClass, setLetterClass] = useState("text-animate");
	const [data, setData] = useState([]);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLetterClass("text-animate-hover");
		}, 3000);

		return () => {
			clearTimeout(timer);
		};
	});

	useEffect(() => {
		setData(portfolioData);
	}, []);

	const renderPortfolio = (portfolio) => {
		return (
			<div className='images-container'>
				{portfolio.map((port, idx) => {
					return (
						<div
							className='image-box'
							key={idx}>
							<img
								src={port.cover}
								className='portfolio-image'
								alt='portfolio-project'
							/>
							<div className='content'>
								<p className='title'>{port.name}</p>
								<h4 className='description'>{port.description}</h4>
								<div>
									{port.url && (
										<button
											className='btn'
											onClick={() => window.open(port.url)}>
											Website
										</button>
									)}
									{port.url && (
										<button
											className='btn btn2'
											onClick={() => window.open(port.linkGit)}>
											Git
										</button>
									)}
									{port.text && <p className='text'>{port.text}</p>}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		);
	};

	return (
		<>
			<div className='container portfolio-page'>
				<h1 className='page-title'>
					<AnimatedLetters
						letterClass={letterClass}
						strArray={"Portfolio".split("")}
						idx={15}
					/>
				</h1>
				<div>{renderPortfolio(data)}</div>
			</div>
			<Loader type='pacman' />
		</>
	);
};

export default Portfolio;
