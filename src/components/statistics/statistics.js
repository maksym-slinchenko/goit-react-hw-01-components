import PropTypes from 'prop-types';
import s from './statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div className="container">
      <section className={s.statistics}>
        {title && <h2 className={s.title}>{title}</h2>}
        <ul className={s.stat_list}>
          {stats.map(({ id, label, stat }) => (
            <li
              className={s.item}
              key={id}
              style={{
                backgroundColor:
                  '#' + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              <span className={s.label}>{label} </span>
              <span className={s.percentage}>{stat}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
