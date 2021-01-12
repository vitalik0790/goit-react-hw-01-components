import React from 'react'
import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead className={s.head}>
                <tr>
                    <th className={s.headRow}>Type</th>
                    <th className={s.headRow}>Amount</th>
                    <th className={s.headRow}>Currency</th>
                </tr>
            </thead>

            <tbody className={s.body}>
                {items.map(item => {
                    return (
                        <tr className={s.row} key={item.id}>
                            <td className={s.data}>>{item.type}</td>
                            <td className={s.data}>>{item.amount}</td>
                            <td className={s.data}>>{item.currency}</td>
                        </tr>
                    )
                })}

            </tbody>
        </table >
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })
    )
}

export default TransactionHistory;