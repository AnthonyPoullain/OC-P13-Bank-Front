import PropTypes from 'prop-types';
import styles from './FeatureItem.module.css';

/**
 * FeatureItem component
 *
 * @param {Object} feature - The feature object.
 * @param {string} feature.icon - The icon url.
 * @param {string} feature.alt - The alt text.
 * @param {string} feature.title - The title text.
 * @param {string} feature.text - The text.
 */
function FeatureItem({ feature }) {
	const { icon, alt, title, text } = feature;
	return (
		<div className={styles.feature_item}>
			<img src={icon} alt={alt} className={styles.feature_icon} />
			<h3 className={styles.feature_item_title}>{title}</h3>
			<p>{text}</p>
		</div>
	);
}

FeatureItem.propTypes = {
	feature: PropTypes.shape({
		icon: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	}).isRequired,
};

export default FeatureItem;
