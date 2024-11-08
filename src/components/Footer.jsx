import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
const Footer = () => {
	return (
		<footer className="bg-[#1B1B1B] border-teal-500 border p-10 rounded-3xl w-full flex justify-between">
			<p className="caption text-n-4 lg:block">
				© {new Date().getFullYear()}. All rights reserved from{' '}
			</p>
			<span className={`${styles.sectionSubText}`}> Developer Ahsan Khan</span>
		</footer>
	);
};

export default SectionWrapper(Footer, '');
