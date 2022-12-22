import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import styles from './AccountCard.module.css';

function AccountCard({ accountData }: { accountData: Account | null }) {
	return (
		<section className={styles.account}>
			<div className={styles.account_content_wrapper}>
				<h3 className={styles.account_title}>
					{accountData?.title || <Skeleton />}
				</h3>
				<p className={styles.account_amount}>
					{accountData?.amount || <Skeleton />}
				</p>
				<p className={styles.account_amount_description}>
					{accountData?.description || <Skeleton />}
				</p>
			</div>
			<div className={`${styles.account_content_wrapper} ${styles.cta}`}>
				{accountData && (
					<button className={styles.transaction_button} type="button">
						View transactions
					</button>
				)}
			</div>
		</section>
	);
}

AccountCard.propTypes = {
	accountData: PropTypes.shape({
		title: PropTypes.string,
		amount: PropTypes.string,
		description: PropTypes.string,
	}),
};

AccountCard.defaultProps = {
	accountData: null,
};

export default AccountCard;
