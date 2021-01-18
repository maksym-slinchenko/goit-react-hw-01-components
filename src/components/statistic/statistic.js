import PropTypes from 'prop-types';
import s from './statistic.module.css';

const Statistic = ({ id, title, stats = 0 }) => {
  return (
    <li
      className={s.item}
      key={id}
      style={{
        backgroundColor:
          '#' + Math.floor(Math.random() * 16777215).toString(16),
      }}
    >
      <span className={s.label}>{title} </span>
      <span className={s.percentage}>{stats}%</span>
    </li>
  );
};

Statistic.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
export default Statistic;
