import s from './transaction-history.module.css';

const TransactionHistory = ({ children }) => {
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
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
