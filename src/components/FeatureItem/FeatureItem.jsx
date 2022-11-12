import './FeatureItem.css';
import PropTypes from 'prop-types';

function FeatureItem({ feature }) {
	const { icon, alt, title, text } = feature;
	return (
		<div className="feature-item">
			<img src={icon} alt={alt} className="feature-icon" />
			<h3 className="feature-item-title">{title}</h3>
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
