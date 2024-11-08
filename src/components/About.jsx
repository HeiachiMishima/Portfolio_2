import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className="w-full bg-gradient-to-r from-teal-500 to-orange-500 p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450
				}}
				className="bg-[#1B1B1B] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img src={icon} alt={title} className="w-16 h-16 object-contain" />

				<h3 className="text-[#EDEDED] text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-[#32E0C4]`}>
					Introduction
				</p>
				<h2 className={`${styles.sectionHeadText} text-[#EDEDED]`}>
					Overview.
				</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-[#C4C4C4] text-[17px] max-w-3xl leading-[30px]"
			>
				Hey there! My name is Ahsan Khan, and I am a seasoned Frontend Developer
				with 3 years of experience. I specialize in JavaScript frameworks such
				as React and Vue, and I am also proficient in developing mobile
				applications using React Native. Let's work together to bring your ideas
				to life!
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
