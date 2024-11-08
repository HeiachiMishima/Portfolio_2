import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<section className="relative w-full h-screen mx-auto ">
			{' '}
			{/* Dark background */}
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#0D7377]" />{' '}
					{/* Accent color */}
					<div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-[#0D7377] to-[#32E0C4]" />{' '}
					{/* Gradient */}
				</div>

				<div className="">
					<h1 className={`${styles.heroHeadText} text-[#EDEDED]`}>
						{' '}
						{/* Light text color */}
						Hi I'm, <span className="text-[#32E0C4]">Ahsan khan</span>{' '}
						{/* Bright accent color */}
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-[#C4C4C4]`}>
						{' '}
						{/* Light gray text */}A Principal Front-End Engineer from Rahim Yar
						Khan, Pakistan,
						<br className="sm:block hidden" />
						having 3 years of experience providing front-end development,
						producing responsive websites and mobile apps
					</p>
				</div>
			</div>
			{isDesktop && <ComputersCanvas />}{' '}
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-[#32E0C4] flex justify-center items-start p-2">
						{' '}
						{/* Bright border */}
						<motion.div
							animate={{
								y: [0, 24, 0]
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop'
							}}
							className="w-3 h-3 rounded-full bg-[#32E0C4] mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
