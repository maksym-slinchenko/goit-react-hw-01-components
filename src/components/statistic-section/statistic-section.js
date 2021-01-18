import PropTypes from 'prop-types';
import s from './statistic-section.module.css';

const StatisticSection = ({ children }) => {
  return (
    <div className="container">
      <section className={s.statistics}>
        <h2 className={s.title}>Upload stats</h2>
        <ul className={s.stat_list}>{children}</ul>
      </section>
    </div>
  );
};

// StatisticSection.propTypes = {
//   children: PropTypes.function,
// };

export default StatisticSection;
