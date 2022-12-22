import styles from './LoadingSpinner.module.css';

function LoadingSpinner() {
	return (
		<div className={styles.lds_ellipsis}>
			<div />
			<div />
			<div />
			<div />
		</div>
	);
}

export default LoadingSpinner;
