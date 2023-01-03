import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './ErrorMessage.module.css';
import { clearErrorMessage } from '../../features/auth/userSlice';

/**
 * ErrorMessage component
 *
 * @param {string} message - error message
 */
function ErrorMessage({ message }) {
	const dispatch = useDispatch();

	const handleCloseDialog = () => {
		dispatch(clearErrorMessage());
	};

	return (
		message && (
			<div className={styles.dialog}>
				<button
					onClick={handleCloseDialog}
					className={styles.closeBtn}
					type="button"
				>
					x
				</button>
				<p>{message}</p>
			</div>
		)
	);
}

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

export default ErrorMessage;
