import React from 'react';
import PropTypes from 'prop-types';
import styles from './AccountCard.module.css';

function AccountCard({ accountData }) {
	const { title, amount, description } = accountData;

	return (
		<section className={styles.account}>
			<div className={styles.account_content_wrapper}>
				<h3 className={styles.account_title}>{title}</h3>
				<p className={styles.account_amount}>{amount}</p>
				<p className={styles.account_amount_description}>{description}</p>
			</div>
			<div className={`${styles.account_content_wrapper} ${styles.cta}`}>
				<button className={styles.transaction_button} type="button">
					View transactions
				</button>
			</div>
		</section>
	);
}

AccountCard.propTypes = {
	accountData: PropTypes.shape({
		title: PropTypes.string.isRequired,
		amount: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
	}).isRequired,
};

export default AccountCard;
