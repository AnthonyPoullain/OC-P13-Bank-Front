import { useEffect } from 'react';
import FeatureItem from '../../components/FeatureItem/FeatureItem';
import Hero from '../../components/Hero/Hero';

import ChatIcon from '../../assets/icon-chat.png';
import MoneyIcon from '../../assets/icon-money.png';
import SecurityIcon from '../../assets/icon-security.png';

import styles from './Home.module.css';

import { tabTitle } from '../../utils/helperFunctions';

const FEATURES: Feature[] = [
	{
		key: 1,
		icon: ChatIcon,
		alt: 'Chat icon',
		title: 'You are our #1 priority',
		text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
	},
	{
		key: 2,
		icon: MoneyIcon,
		alt: 'Money icon',
		title: 'More savings means higher rates',
		text: 'The more you save with us, the higher your interest rate will be!',
	},
	{
		key: 3,
		icon: SecurityIcon,
		alt: 'Security icon',
		title: 'Security you can trust',
		text: 'We use top of the line encryption to make sure your data and money is always safe.',
	},
];

function Home() {
	useEffect(() => {
		tabTitle('Home Page');
	}, []);

	return (
		<>
			<Hero />
			<section className={styles.features}>
				<h2 className="sr-only">Features</h2>
				{FEATURES.map((item) => (
					<FeatureItem feature={item} key={item.key} />
				))}
			</section>
		</>
	);
}

export default Home;
