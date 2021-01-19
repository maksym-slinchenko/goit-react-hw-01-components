import PropTypes from 'prop-types';
import s from './transaction-history.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <div className="container">
      <table className={s.transaction_history}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

export default TransactionHistory;
