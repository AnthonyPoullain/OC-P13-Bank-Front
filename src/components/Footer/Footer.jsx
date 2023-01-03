import styles from './Footer.module.css';

/**
 * Footer component
 */
function Footer() {
	return (
		<footer className={styles.footer}>
			<p className={styles.footer_text}>Copyright 2020 Argent Bank</p>
		</footer>
	);
}

export default Footer;
