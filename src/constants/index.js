import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	Vue,
	docker,
	robo,
	xs,
	semantic_sol,
	hwt,
	logo,
	logo2,
	wondercrafts_org,
	upwork_fiverr
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About'
	},
	{
		id: 'work',
		title: 'Work'
	},
	{
		id: 'contact',
		title: 'Contact'
	}
];

const services = [
	{
		title: 'React JS Developer',
		icon: web
	},
	{
		title: 'React Native Developer',
		icon: mobile
	},
	{
		title: 'Frontend Developer',
		icon: backend
	},
	{
		title: 'Vue JS Developer',
		icon: creator
	}
];

const technologies = [
	{
		name: 'HTML 5',
		icon: html
	},
	{
		name: 'CSS 3',
		icon: css
	},
	{
		name: 'JavaScript',
		icon: javascript
	},
	{
		name: 'React JS',
		icon: reactjs
	},
	{
		name: 'Tailwind CSS',
		icon: tailwind
	},
	{
		name: 'Node JS',
		icon: nodejs
	},
	{
		name: 'Redux',
		icon: redux
	},
	{
		name: 'Vue Js',
		icon: Vue
	},
	{
		name: 'Sass',
		icon: docker
	}
];

const experiences = [
	{
		title: 'Principal Frontend Engineer',
		company_name: 'RoboCharge',
		icon: robo,
		iconBg: '#E6DEDD',
		date: 'October 2023 - November 2024',
		points: []
	},
	{
		title: 'React Native Developer',
		company_name: 'Wonder Crafts',
		icon: wondercrafts_org,
		iconBg: '#fff',
		date: ' May 2023 - October 2023',
		points: []
	},
	{
		title: 'React Native Developer (Internship)',
		company_name: 'XpertSpot-IT Solutions',
		icon: xs,
		iconBg: '#fff',
		date: ' March 2023 - May 2023',
		points: []
	},
	{
		title: 'React Native Developer (Internship)',
		company_name: 'Semantic Solutions',
		icon: semantic_sol,
		iconBg: '#fff',
		date: ' January 2023 - March 2023',
		points: []
	},
	{
		title: 'Freelancing (Frontend Engineer)',
		company_name: 'Fiverr, Upwork',
		icon: upwork_fiverr,
		iconBg: '#fff',
		date: ' March 2022 - December 2022',
		points: []
	},
	{
		title: 'Digital Marketing Manager (Internship)',
		company_name: 'Hello World Technologies',
		icon: hwt,
		iconBg: '#fff',
		date: ' Jan 2022 - Mar 2022',
		points: []
	}
];

const testimonials = [
	{
		testimonial: "We've worked together on a product called Cheqi.",
		name: 'Koen Deleij',
		designation: 'Architect',
		company: 'https://www.linkedin.com/in/koendeleij/',
		image:
			'https://media.licdn.com/dms/image/D4E03AQEZcWX7AkM1tQ/profile-displayphoto-shrink_200_200/0/1703148186024?e=2147483647&v=beta&t=SDf7CXfLADkMo6C25cr4ZGp8E98L8SCMApgqVZH8gtU'
	},
	{
		testimonial: 'I had the pleasure of wokring',
		name: 'Salman Khakwani',
		designation: 'Product Development Engineer',
		company: 'https://www.linkedin.com/in/salman-khakwani/',
		image:
			'https://media.licdn.com/dms/image/C4D03AQG978w-q78E0A/profile-displayphoto-shrink_100_100/0/1661943888532?e=1722470400&v=beta&t=yqIUw_OWvC5BQWs1jGZaGePEDHKGqUAhVKxHmGgP0F8'
	},
	{
		testimonial: 'In my career I have worked with many front end developers',
		name: 'Syed Shah',
		designation: 'Senior Project Manager',
		company: 'https://www.linkedin.com/in/syed-shah-43a12088/',
		image:
			'https://media.licdn.com/dms/image/C4E03AQEHHMs2vm0YMg/profile-displayphoto-shrink_200_200/0/1517053246352?e=2147483647&v=beta&t=ZfCaT1KjF4CaJstJxTXzXKIXOQsfEYOSK1HgCsETgoQ'
	}
];

const projects = [
	{
		name: 'Brainwave',
		description:
			'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient'
			},

			{
				name: 'tailwind',
				color: 'pink-text-gradient'
			}
		],
		image: web,
		source_code_link: 'https://github.com/'
	},
	{
		name: 'Nike',
		description:
			'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient'
			},
			{
				name: 'restapi',
				color: 'green-text-gradient'
			},
			{
				name: 'scss',
				color: 'pink-text-gradient'
			}
		],
		image: web,
		source_code_link: 'https://github.com/'
	},
	{
		name: 'Trip Guide',
		description:
			'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
		tags: [
			{
				name: 'nextjs',
				color: 'blue-text-gradient'
			},
			{
				name: 'react',
				color: 'green-text-gradient'
			},
			{
				name: 'taiwind',
				color: 'pink-text-gradient'
			}
		],
		image: web,
		source_code_link: 'https://github.com/'
	}
];

export { services, technologies, experiences, testimonials, projects };
